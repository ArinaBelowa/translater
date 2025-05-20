'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            content.style.display = "block";
            preloader.remove();
        }, 3000);
    }
