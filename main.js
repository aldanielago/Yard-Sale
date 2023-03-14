const menu_email = document.querySelector('.nav_right');
const desktop_menu = document.querySelector('.desktop-menu');

const menu_hambur = document.querySelector('#menu-hambur');
const mobile_menu = document.querySelector('.mobile-menu');

menu_email.addEventListener('click', showDesktopMenu);
menu_hambur.addEventListener('click', showMenuHambur);

function showDesktopMenu(){
    desktop_menu.classList.toggle('inactive');
}

function showMenuHambur(){
    mobile_menu.classList.toggle('inactive');
}