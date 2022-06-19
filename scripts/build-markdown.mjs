import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import yaml from "js-yaml";
import { basename, dirname, extname, join, relative, resolve } from "path";
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
  })
  .use(remarkRehype)
  .use(rehypeStringify);

main();

async function main() {
  const markdownPaths = await getFiles(DIR.content);

  markdownPaths.map(async (markdownPath) => {
    const mdString = await readFile(markdownPath, "utf-8");
    const htmlFile = await buildMd.process(mdString);
    const path = relative(DIR.content, markdownPath);
    const slug = slugify(basename(path)).replace(".md", "");

    const contentObjString = JSON.stringify(
      {
        html: String(htmlFile),
        meta: {
          path,
          slug,
          ...currentMeta,
        },
      },
      undefined,
      2
    );

    const outPath = withExt(
      join(DIR.contentOut, relative(DIR.content, markdownPath)),
      ".json"
    );
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, contentObjString);
    console.log(`[build-md] ${outPath}`);
  });
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

function withExt(file, extension) {
  const base = basename(file, extname(file));
  return join(dirname(file), base + extension);
}
