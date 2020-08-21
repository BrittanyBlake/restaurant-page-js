
import "./styles/main.scss";
// console.log("Hello webpack!")
import { header } from './js/header'
import { navbar } from "./js/navbar";
import { home } from "./js/home";
import { lowerhome } from "./js/lowerhome";
import { about } from "./js/about"
import { menu } from "./js/menu";
import { food } from "./js/food";
import { contact } from "./js/contact";
import { footer } from "./js/footer";

const content = document.querySelector('#content')
content.appendChild(header);
content.appendChild(navbar);
content.appendChild(home);
content.appendChild(lowerhome);
content.appendChild(about);
content.appendChild(menu);
content.appendChild(food);
content.appendChild(contact);
content.appendChild(footer);