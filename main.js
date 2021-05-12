'use strict';

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

    });
  });

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  })

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })


  
  // スライダー
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    centeredSlides: true,//1枚目のスライド中央配置
    paginationClickable: true,
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    });
    
  
    
    if(window.matchMedia('(max-width: 1000px)').matches) {
      //タブレット処理
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        centeredSlides: true,//1枚目のスライド中央配置
        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
    
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        });
  } else if (window.matchMedia('(max-width:700px)').matches) {
      //スマホ処理
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        centeredSlides: true,//1枚目のスライド中央配置
        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
    
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        });
  }

      
   


}
