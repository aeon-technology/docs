const modules = import.meta.globEager("../../_content_gen/**/*.json");
article();

async function article() {
  const article = Object.entries(modules)
    .map(([_path, mod]) => mod.default)
    .map((page) => `<article>${page.html}</article>`)
    .join("");

  document.getElementById("main").innerHTML = article;
}
