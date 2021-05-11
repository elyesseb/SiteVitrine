 // core version + navigation modules:
 import Swiper from 'swiper';
 import SwiperCore, { Navigation } from 'swiper/core';
 // import Swiper styles
 import 'swiper/swiper-bundle.css';
 // configure Swiper to use modules
 SwiperCore.use([Navigation]);
 // init Swiper:
 const swiper = new Swiper(".mySwiper", {
     // Optional parameters
     loop: true,
     // Navigation arrows
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
 });

let navMobile = document.getElementById("nav_mobile");
let menuBtn = document.getElementById("header_menu-burger");

     menuBtn.addEventListener("click", function(){
        navMobile.classList.toggle("appear");
     })
