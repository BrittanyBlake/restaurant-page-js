
import "./styles/main.scss";
// console.log("Hello webpack!")
import { header } from './js/header'
import { navbar } from "./js/navbar";

const content = document.querySelector('#content')
content.appendChild(header);
content.appendChild(navbar);