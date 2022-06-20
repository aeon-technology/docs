import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import yaml from "js-yaml";
import { basename, dirname, join, relative, resolve } from "path";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import slugify from "slugify";
import { unified } from "unified";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

let currentMeta;

const DIR = {
  src: resolve(__dirname, "../src"),
  dist: resolve(__dirname, "../dist"),
  content: resolve(__dirname, "../content"),
  contentOut: resolve(__dirname, "../_content_gen"),
};

const buildMd = unified()
  .use(remarkParse)
  .use(remarkFrontmatter, ["yaml"])
  .use(() => (ast) => {
    const node = ast.children.find((n) => n.type === "yaml");
    const metadata = yaml.load(node.value);
    currentMeta = metadata;
    // TODO write to file.data
  })
  .use(remarkRehype)
  .use(rehypeStringify);

main();

async function main() {
  const markdownPaths = await getFiles(DIR.content);

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
          ...currentMeta,
        },
      };

      console.log(`[build-md] ${path}`);
      return page;
    })
  );

  const indexTemplate = await readFile(join(DIR.src, "index.html"), "utf-8");
  const indexHtml = indexTemplate.replace(
    "{{ pages }}",
    pages
      .sort((a, b) => b.meta.path.localeCompare(a.meta.path))
      .map(renderPageHtml)
      .join("\n")
  );

  const indexOutPath = join(DIR.dist, "index.html");
  await ensureDir(indexOutPath);
  await writeFile(indexOutPath, indexHtml);
}

function renderPageHtml(page) {
  return `<article>${page.html}</article>`;
}

async function ensureDir(dir) {
  return mkdir(dirname(dir), { recursive: true });
}

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}
