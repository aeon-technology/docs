main();

async function main() {
  sideNav();
}

function sideNav() {
  const navHtml = `<ul>${[...document.querySelectorAll(`h2,h3`)]
    .map(
      (h) =>
        `<li><a href="#${h.id}" data-tag="${h.tagName}">${h.textContent}</a></li>`
    )
    .join("")}</ul>`;

  document.getElementById("side-nav").innerHTML = navHtml;
}
