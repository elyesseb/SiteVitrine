let navMobile = document.getElementById("nav_mobile");
let menuBtn = document.getElementById("header_menu-burger");

menuBtn.addEventListener("click", function() {
    navMobile.classList.toggle("appear");
})