export const navbar = (() => {
    const nav = document.createElement('nav');
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark py-lg-4");
    nav.setAttribute("id", "mainNav");
    const container = document.createElement('div');
    container.setAttribute("class", "container");
    const navLinkOne = document.createElement('a');
    navLinkOne.setAttribute("class", "nav-link text-uppercase text-expanded");
    navLinkOne.setAttribute("href", "#");
    navLinkOne.innerHTML = `Home`


}) ();