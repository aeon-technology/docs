console.log("ui ready");

[...document.querySelectorAll("nav a")]
  .find((a) => a.pathname === location.pathname)
  ?.classList.add("active");
