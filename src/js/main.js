let navMobile = document.querySelector("#nav_mobile");

let menuBtn = document.querySelector("#btn_menu-burger");
    console.log(menuBtn);

 for (let i = 0; i < menuBtn.lenght; i++) {

     console.log(menuBtn[i]);

     menuBtn[i].addEventListener("click", function(){
         navMobile[i].classList.toggle("nav_mobile-list-element")
     })
    
 }