"use strict"

const toggle_button = document.querySelector(".mobile-nav-toggle");
const primary_nav = document.querySelector(".primary-navigation");


toggle_button.addEventListener("click", ()=>{
    const visible = primary_nav.getAttribute("data-visible");
    if(visible=="false")
    {
        primary_nav.setAttribute("data-visible",true);
        toggle_button.setAttribute("aria-expanded", true);
    }
    else{
        primary_nav.setAttribute("data-visible",false);
        toggle_button.setAttribute("aria-expanded", false);
    }
});