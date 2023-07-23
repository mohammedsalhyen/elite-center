
let menu = document.querySelector(".nav-heading");
let menuIcon = document.querySelector(".nav-icon");
    console.log(menuIcon)
    console.log(menu)
    menuIcon.addEventListener("click",()=>{
        menu.classList.toggle("show");
    })