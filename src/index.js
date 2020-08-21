import "./styles/main.scss";
import { header } from "./js/header";
import { navbar } from "./js/navbar";
import { home } from "./js/home";
import { lowerhome } from "./js/home";
import { about } from "./js/about";
import { menu } from "./js/menu";
import { food } from "./js/food";
import { smoothie } from "./js/smoothie";
import { contact } from "./js/contact";
import { footer } from "./js/footer";

const content = document.querySelector("#content");
content.appendChild(header);
content.appendChild(navbar);
content.appendChild(home);
content.appendChild(lowerhome);
content.appendChild(footer);

const clearPage = () => {
  const contentChildren = content.children;
  const contentArr = [...contentChildren];
  contentArr.forEach((element) => element.remove());
  content.appendChild(header);
  content.appendChild(navbar);
};

const switchTab = (e) => {
  const activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach((tab) => {
    tab.className = tab.className.replace("active", "");
  });
  const link = e.target.parentElement.children[0];

  if (link.getAttribute("href") === "#about") {
    clearPage();
    content.appendChild(about);
    content.appendChild(footer);
  } else if (link.getAttribute("href") === "#home") {
    clearPage();
    content.appendChild(home);
    content.appendChild(lowerhome);
    content.appendChild(footer);
  } else if (link.getAttribute("href") === "#menu") {
    clearPage();
    content.appendChild(menu);
    content.appendChild(food);
    content.appendChild(smoothie);
    content.appendChild(footer);
  } else if (link.getAttribute("href") === "#find") {
    clearPage();
    content.appendChild(contact);
    content.appendChild(footer);
  }
  event.target.parentElement.className += " active";
};

const tabs = document.getElementById("tabs");
tabs.addEventListener("click", switchTab, false);
