import esbuild from "esbuild";
import fs from "fs/promises";
import { shiftHeading } from "hast-util-shift-heading";
import yaml from "js-yaml";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMathjax from "rehype-mathjax";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import rehypeUrls from "rehype-urls";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
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

  const indexTemplate = await fs.readFile(path.join(DIR.src, "index.html"), "utf-8");

  const getToc = async (mdString, srcRelativePath) => {
    const srcPageDir = path.dirname(path.join(DIR.content, srcRelativePath));
    const distPageDir = rebase(srcPageDir, DIR.content, DIR.dist);
    const tocBuilder = getTocBuilder(distPageDir);
    return tocBuilder.process(mdString);
  };

  const tocMd = await fs.readFile(path.join(DIR.content, "_toc.md"));

  const tasks = mdPages
    .map(async (mdPage) => ({
      html: indexTemplate
        .replace("{{ main }}", renderPageHtml(mdPage))
        .replace("{{ nav }}", await getToc(tocMd, mdPage.meta.srcRelativePath))
        .replace("{{ beforeHeadEnd }}", `<style>${css.outputFiles[0].text}</style>`)
        .replace("{{ beforeBodyEnd }}", `<script type="module">${js.outputFiles[0].text}</script>`),
      outPath: path.join("dist", replaceRelativePathFileExtension(mdPage.meta.srcRelativePath, ".md", ".html")),
    }))
    .map(async (asyncTask) => {
      const task = await asyncTask;
      await ensureDir(task.outPath);
      await fs.writeFile(task.outPath, task.html);
    });

  await Promise.all(tasks);
}

async function buildMdPages() {
  const markdownPaths = (await getFiles(DIR.content)).filter(
    (filePath) => [".md"].includes(path.extname(filePath)) && !path.basename(filePath).startsWith("_")
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
  .use(remarkMath)
  .use(remarkGfm)
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
  .use(rehypeMathjax)
  .use(rehypeUrls, (url, node) => {
    try {
      if (path.extname(url.pathname) === ".md") {
        const updatedPath = replaceRelativePathFileExtension(url.pathname, ".md", ".html");
        return url.hash ? `${updatedPath}${url.hash}` : updatedPath;
      }
    } catch {}
  })
  .use(() => (ast) => shiftHeading(ast, 1))
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: "wrap",
  })
  .use(rehypeStringify);

const getTocBuilder = (pageDir) =>
  unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeUrls, (url, node) => {
      if (path.extname(url.pathname) === ".md") {
        const absoluteLink = path.join(DIR.dist, url.pathname);
        const relativeLink = path.relative(pageDir, absoluteLink);
        const updatedPath = replaceRelativePathFileExtension(relativeLink, ".md", ".html");
        return url.hash ? `${updatedPath}${url.hash}` : updatedPath;
      }
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
  const nonMdContentFiles = contentFiles.filter((file) => path.extname(file) !== ".md");

  const copyTasks = [
    ...publicFiles.map((file) => [file, rebase(file, DIR.public, DIR.dist)]),
    ...nonMdContentFiles.map((file) => [file, rebase(file, DIR.content, DIR.dist)]),
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

function replaceRelativePathFileExtension(srcPath, fromExt, toExt) {
  const fromPattern = new RegExp(`${fromExt}$`);
  return srcPath.replace(fromPattern, toExt);
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
