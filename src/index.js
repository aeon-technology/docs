highlightActiveNavItem();
handleUrlFragmentFromSearchParameter();
enableBackForwardNavButton();

function highlightActiveNavItem() {
  [...document.querySelectorAll("nav a")].find((a) => a.pathname === location.pathname)?.classList.add("active");
  const activeElement = document.querySelector("nav a.active");
  if (activeElement?.scrollIntoViewIfNeeded) {
    activeElement.scrollIntoViewIfNeeded(false);
  } else {
    activeElement.scrollIntoView();
  }
}

// Convert `?` search parameter to `#` hash
function handleUrlFragmentFromSearchParameter() {
  const fragment = new URLSearchParams(location.search).get("fragment");
  if (fragment) {
    location.hash = fragment;
  }
}

function enableBackForwardNavButton() {
  document.querySelector("#nav-buttons").removeAttribute("hidden");
  document.querySelector("#go-next").onclick = () => navigateByOffset(1);
  document.querySelector("#go-prev").onclick = () => navigateByOffset(-1);
}

function navigateByOffset(offset) {
  const flattenedLinks = [...document.querySelectorAll("nav a")];
  const activeElement = document.querySelector("nav a.active");
  const nextElement = flattenedLinks[flattenedLinks.indexOf(activeElement) + offset];
  nextElement?.click();
}
