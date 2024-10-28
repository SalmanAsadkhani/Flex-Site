let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header-icon");
let menuBtnIcon = document.querySelector(".header-icon i");

menuBtn.addEventListener("click" , function(){
    if(menuBtnIcon.classList.contains("fa fa-bars")){
        menu.style.left = "0px";
        menuBtnIcon.classList.contains = "fa fa-times";
    }
    else{
        menu.style.left = "-192px";
    }
    
})
