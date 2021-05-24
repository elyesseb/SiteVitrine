  // import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';
  // init Swiper:
  const swiper = new Swiper(".mySwiper", {
      // Optional parameters
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 3500,
          disableOnInteraction: true,
      },
      // pagination parameters
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      // Navigation arrows
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });