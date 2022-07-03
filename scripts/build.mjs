import esbuild from "esbuild";
import fs from "fs/promises";
import { shiftHeading } from "hast-util-shift-heading";
import yaml from "js-yaml";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import rehypeUrls from "rehype-urls";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isDevelopement = process.argv.includes("--dev");

const DIR = {
  src: path.resolve(__dirname, "../src"),
  dist: path.resolve(__dirname, "../dist"),
  content: path.resolve(__dirname, "../content"),
  public: path.resolve(__dirname, "../public"),
  media: path.resolve(__dirname, "../content/media"),
};

main();

async function main() {
  const mdPages = await buildMdPages();
  const js = await buildJs();
  const css = await buildCss();
  await copyAssets();

  const indexTemplate = await fs.readFile(
    path.join(DIR.src, "index.html"),
    "utf-8"
  );

  const tasks = mdPages
    .map((mdPage) => ({
      html: indexTemplate
        .replace("{{ main }}", renderPageHtml(mdPage))
        .replace(
          "{{ beforeHeadEnd }}",
          `<style>${css.outputFiles[0].text}</style>`
        )
        .replace(
          "{{ beforeBodyEnd }}",
          `<script type="module">${js.outputFiles[0].text}</script>`
        ),
      outPath: path.join(
        "dist",
        replaceExtension(mdPage.meta.srcRelativePath, ".html")
      ),
    }))
    .map(async (task) => {
      await ensureDir(task.outPath);
      await fs.writeFile(task.outPath, task.html);
    });

  await Promise.all(tasks);
}

async function buildMdPages() {
  const markdownPaths = (await getFiles(DIR.content)).filter((filePath) =>
    [".md"].includes(path.extname(filePath))
  );

  const pages = await Promise.all(
    markdownPaths.map(async (markdownPath) => {
      const mdString = await fs.readFile(markdownPath, "utf-8");
      const htmlFile = await buildMd.process(mdString);
      const outPath = path.relative(DIR.content, markdownPath);

      const page = {
        html: String(htmlFile),
        meta: {
          ...htmlFile.meta,
          srcRelativePath: outPath,
        },
      };

      console.log(`[build-md] ${markdownPath}`);
      return page;
    })
  );

  return pages;
}

const buildMd = unified()
  .use(remarkParse)
  .use(remarkFrontmatter, ["yaml"])
  .use(() => (ast, file) => {
    // inject frontmatter to the vfile
    const node = ast.children.find((n) => n.type === "yaml");
    if (node) {
      const meta = yaml.load(node.value);
      file.meta = meta;
    }
  })
  .use(remarkRehype)
  .use(rehypeUrls, (url, node) => {
    if (path.extname(url.pathname) === ".md") {
      return replaceExtension(url.pathname, ".html");
    }
  })
  .use(() => (ast) => shiftHeading(ast, 1))
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: "wrap",
  })
  .use(rehypeStringify);

async function buildCss() {
  return esbuild
    .build({
      entryPoints: ["src/index.css"],
      bundle: true,
      write: false,
      minify: !isDevelopement,
      sourcemap: isDevelopement ? "inline" : false,
    })
    .catch(() => process.exit(1));
}

async function buildJs() {
  return esbuild
    .build({
      entryPoints: ["src/index.js"],
      bundle: true,
      format: "esm",
      write: false,
      minify: !isDevelopement,
      sourcemap: isDevelopement ? "inline" : false,
    })
    .catch(() => process.exit(1));
}

async function copyAssets() {
  const publicFiles = await getFiles(DIR.public);
  const contentFiles = await getFiles(DIR.content);
  const nonMdContentFiles = contentFiles.filter(
    (file) => path.extname(file) !== ".md"
  );

  const copyTasks = [
    ...publicFiles.map((file) => [file, rebase(file, DIR.public, DIR.dist)]),
    ...nonMdContentFiles.map((file) => [
      file,
      rebase(file, DIR.content, DIR.dist),
    ]),
  ].map(async ([from, to]) => {
    await ensureDir(to);
    await fs.copyFile(from, to);
    console.log(`[copy-assets] ${to}`);
  });

  return Promise.all(copyTasks);
}

function renderPageHtml(page) {
  return `<article>${page.html}</article>`;
}

function replaceExtension(srcPath, toExt) {
  return path.format({
    ...path.parse(srcPath),
    base: "",
    ext: toExt,
  });
}

function rebase(srcPath, srcBase, targetBase) {
  return path.join(targetBase, path.relative(srcBase, srcPath));
}

async function ensureDir(dir) {
  return fs.mkdir(path.dirname(dir), { recursive: true });
}

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.join(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}
