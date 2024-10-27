console.log("ui ready");

[...document.querySelectorAll("nav a")].find((a) => a.pathname === location.pathname)?.classList.add("active");

// Convert `?` search parameter to `#` hash
const fragment = new URLSearchParams(location.search).get("fragment");
if (fragment) {
  location.hash = fragment;
}
