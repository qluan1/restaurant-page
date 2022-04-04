import loadPage from './loadPage.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import './style.css';
import loadContact from './contact.js';

loadPage();

let title = document.querySelector('.title');
let home = document.querySelector('#Home');
let menu = document.querySelector('#Menu');
let contact = document.querySelector('#Contact');

title.addEventListener('click', ()=>{
    let current = document.querySelector('a.current');
    if (current) {
        current.classList.remove('current');
    }
    home.classList.add('current');
    loadHome();
});

home.addEventListener('click', ()=> {
    let current = document.querySelector('a.current');
    if (current) {
        current.classList.remove('current');
    }
    home.classList.add('current');
    loadHome();
});

menu.addEventListener('click', () => {
    let current = document.querySelector('a.current');
    if (current) {
        current.classList.remove('current');
    }
    menu.classList.add('current');
    loadMenu();
});
contact.addEventListener('click', ()=> {
    let current = document.querySelector('a.current');
    if (current) {
        current.classList.remove('current');
    }
    contact.classList.add('current');
    loadContact();
});