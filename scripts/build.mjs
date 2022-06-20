import esbuild from "esbuild";
import fse from "fs-extra";
import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import { shiftHeading } from "hast-util-shift-heading";
import yaml from "js-yaml";
import { basename, dirname, join, relative, resolve } from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import slugify from "slugify";
import { unified } from "unified";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const isDevelopement = process.argv.includes("--dev");

const DIR = {
  src: resolve(__dirname, "../src"),
  dist: resolve(__dirname, "../dist"),
  content: resolve(__dirname, "../content"),
  contentOut: resolve(__dirname, "../_content_gen"),
  public: resolve(__dirname, "../public"),
};

const buildMd = unified()
  .use(remarkParse)
  // .use(remarkEmbedImages)
  .use(remarkFrontmatter, ["yaml"])
  .use(() => (ast, file) => {
    // inject frontmatter to the vfile
    const node = ast.children.find((n) => n.type === "yaml");
    if (node) {
      const metadata = yaml.load(node.value);
      file.frontmatter = metadata;
    }
  })
  .use(remarkRehype)
  .use(() => (ast) => shiftHeading(ast, 1))
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: "wrap",
  })
  .use(rehypeStringify);

main();

async function main() {
  const mdPages = await buildMdPages();
  const js = await buildJs();
  const css = await buildCss();
  await copyAssets();

  const indexTemplate = await readFile(join(DIR.src, "index.html"), "utf-8");
  const indexHtml = indexTemplate
    .replace(
      "{{ pages }}",
      mdPages
        .sort((a, b) => a.meta.path.localeCompare(b.meta.path))
        .map(renderPageHtml)
        .join("\n")
    )
    .replace("{{ beforeHeadEnd }}", `<style>${css.outputFiles[0].text}</style>`)
    .replace(
      "{{ beforeBodyEnd }}",
      `<script type="module">${js.outputFiles[0].text}</script>`
    );

  const indexOutPath = join(DIR.dist, "index.html");
  await ensureDir(indexOutPath);
  await writeFile(indexOutPath, indexHtml);
}

async function buildMdPages() {
  const markdownPaths = await getFiles(DIR.content, ".md");

  const pages = await Promise.all(
    markdownPaths.map(async (markdownPath) => {
      const mdString = await readFile(markdownPath, "utf-8");
      const htmlFile = await buildMd.process(mdString);
      const path = relative(DIR.content, markdownPath);
      const slug = slugify(basename(path)).replace(".md", "");

      const page = {
        html: String(htmlFile),
        meta: {
          path,
          slug,
          ...htmlFile.frontmatter,
        },
      };

      console.log(`[build-md] ${path}`);
      return page;
    })
  );

  return pages;
}

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
  return fse.copy(DIR.public, join(DIR.dist));
}

function renderPageHtml(page) {
  return `<article>${page.html}</article>`;
}

async function ensureDir(dir) {
  return mkdir(dirname(dir), { recursive: true });
}

async function getFiles(dir, ext = []) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}
