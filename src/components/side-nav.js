const modules = import.meta.globEager("../../_content_gen/**/*.json");
sideNav();

async function sideNav() {
  const list = (content) => `<ul>${content}</ul>`;
  const nav = list(
    Object.entries(modules)
      .map(([_path, mod]) => mod.default)
      .map(
        (page) => `<li><a href="#${page.meta.slug}">${page.meta.title}</a></li>`
      )
      .join("")
  );

  document.getElementById("side-nav").innerHTML = nav;
}
