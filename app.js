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



/* services tabs */
 
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(onTabClick );

function onTabClick(item) {
   item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {

         tabsBtn.forEach(function (item) {
            item.classList.remove('active')
         })
         tabsItem.forEach(function (item) {
            item.classList.remove('active')
         })
         currentBtn.classList.add('active')
         currentTab.classList.add('active')
      }

   })
}


document.querySelector('.tabs__nav-btn:nth-child(1)').click()




