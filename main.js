'use strict';

{
// 質問
  $(function(){
    $('dt:first').addClass('selected');
    $('dt').click(function(){
      $(this).toggleClass('selected');
      $(this).next().slideToggle();
    });
  });

  // ハンバーガーメニュー
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
  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },

    // Default parameters
    pagination: '.swiper-pagination',
    slidesPerView: 4,// スライドの表示枚数
    centeredSlides: true,//1枚目のスライド中央配置
    paginationClickable: true,
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 800px
      800: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 1000px
      1000: {
        pagination: '.swiper-pagination',
        slidesPerView: 4,

        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
      },
    }
  })

  // ふわっと表示させる
  AOS.init({
    offset: 300,
    delay: 100,
    duration: 500,
    easing: 'ease-in',
    once: true,
  });

  // 問い合わせをスムーススクロールする
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 94;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }


  // お問い合わせの全項目に入力するするとボタンがアクティブになる
  $(document).ready(function () {
    const $submitBtn = $('#submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #check').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);

      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  });

  // お問い合わせ完了メッセージをだす。
  $(document).ready(function () {
    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/hogehoge",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            // ↓問い合わせ欄の下に表示するメッセージ
            $(".end-message").slideDown();
            $(".submit").fadeOut();
            // ↓別のページにメッセージを表示する
            // window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });


}
