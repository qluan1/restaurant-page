import { menuSpecials, menuFood, menuDrinks } from "./menu-items.js";

export default function loadMenu () {
    let content = document.querySelector('#content');
    while (content.firstElementChild) {
        content.removeChild(content.firstElementChild);
    }

    content.appendChild(menuSpecials());
    content.appendChild(menuDrinks());
    content.appendChild(menuFood());
};