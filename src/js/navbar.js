export const navbar = (() => {
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark py-lg-4");
  nav.setAttribute("id", "mainNav");
  const container = document.createElement("div");
  container.setAttribute("class", "container nav-container");
  const navBrand = document.createElement("a");
  navBrand.setAttribute(
    "class",
    "navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
  );
  navBrand.setAttribute("href", "#");
  navBrand.innerHTML = `The Brunch Club`;
  const button = document.createElement("button");
  button.setAttribute("class", "navbar-toggler");
  button.setAttribute("type", "button");
  button.setAttribute("data-toggle", "collapse");
  button.setAttribute("data-target", "#navbarResponsive");
  button.setAttribute("aria-controls", "navbarResponsive");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Toggle navigation");
  const span = document.createElement("span");
  span.setAttribute("class", "navbar-toggler-icon");
  button.appendChild(span);
  const collapseDiv = document.createElement("div");
  collapseDiv.setAttribute("class", "collapse navbar-collapse");
  collapseDiv.setAttribute("id", "navbarResponsive");
  const navList = document.createElement("ul");
  navList.setAttribute("class", "navbar-nav mx-auto");
  navList.innerHTML = `
  <li class="nav-item active px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="#">Home
        <span class="sr-only">(current)</span>
    </a>
  </li>
  <li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="#">About</a>
  </li>
  <li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="#">Menu</a>
  </li>
  <li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="#">Contact Us</a>
  </li>
`;
  container.appendChild(navBrand);
  container.appendChild(button);
  container.appendChild(collapseDiv);
  container.appendChild(navList);
  nav.appendChild(container);
  return nav;
})();
