const menu_email = document.querySelector('.nav_right');
const desktop_menu = document.querySelector('.desktop-menu');

menu_email.addEventListener('click', showDesktopMenu);

function showDesktopMenu(){
    desktop_menu.classList.toggle('inactive')
}