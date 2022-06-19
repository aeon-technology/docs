import { readdir, readFile } from "fs/promises";
import { dirname, resolve } from "path";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const buildMd = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

main();

async function main() {
  const markdownPaths = await getFiles(resolve(__dirname, "../content"));

  markdownPaths.map(async (markdownPath) => {
    const mdString = await readFile(markdownPath, "utf-8");
    const out = await buildMd.process(mdString);
    console.log(out.toString());
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
