
import "./styles/main.scss";
// console.log("Hello webpack!")
import { header } from './js/header'
import { navbar } from "./js/navbar";
import { home } from "./js/home";
import { lowerhome } from "./js/lowerhome";

const content = document.querySelector('#content')
content.appendChild(header);
content.appendChild(navbar);
content.appendChild(home);
content.appendChild(lowerhome);