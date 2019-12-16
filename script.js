'use strict';
const navToggler = document.querySelector('.nav-toggler');
const menu = document.querySelector('.navigation ul');
const links = document.querySelectorAll('.navigation a');

//invoke navTogglerClick function for click event in navigation
navToggler.addEventListener("click", navTogglerClick);

//toggle classes 
function navTogglerClick() {
    navToggler.classList.toggle("open-nav-toggler");
    menu.classList.toggle("open");
}

//invoke navbarClickLink function for click event in links
for(let element of links){
    element.addEventListener("click", navbarClickLink);
}

function navbarClickLink() {
  if(menu.classList.contains("open")) {
    navTogglerClick();
  }
}