const menuBtn = document.querySelector('.menu__btn');
const navBurger = document.querySelector('.burger__nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if (!menuOpen) {
      navBurger.classList.add('active')
      menuBtn.classList.add('open')
      menuOpen = true;
   } else {
      navBurger.classList.remove('active')
      menuBtn.classList.remove('open')
      menuOpen = false;
   }
   
});


var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   speed:800,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });




 