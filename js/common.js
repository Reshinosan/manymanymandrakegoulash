// 星エフェクト用
function init(){
    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var star = "";
    var numStars = 150;
    var starry_sky = document.querySelector(".constellation");
    var widthWindow = window.innerWidth;
    var heightWindow = 300;
    for (var i = 0; i < numStars; i++) {
      
      star += "<span class='star " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
      + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
      + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }
    starry_sky.innerHTML = star;

    // スクロールアニメーション用
    window.sr = ScrollReveal({
      reset: true
    });
    sr.reveal('.animate1', { origin: 'left', easing: 'ease', duration: 500, distance: '15px', opacity: 0, scale: 1,  delay: 500, });
    sr.reveal('.animate2', { origin: 'right', easing: 'ease', duration: 500, distance: '15px', opacity: 0, scale: 1,  delay: 500, });
    sr.reveal('.animate3', { origin: 'top', easing: 'ease', duration: 500, distance: '50px', opacity: 0, scale: 1,  delay: 250, });
    sr.reveal('.animate4', { easing: 'ease', duration: 500, distance: '100px', opacity: 0, scale: 0,  delay: 250, });
    sr.reveal('.animate5', { origin: 'top', easing: 'ease', duration: 500, distance: '50px', opacity: 0, scale: 1,  delay: 250, });
}


// ここからJquery
$(function(){
  $(document).ready(function(){

    // init関数を呼び出す
    init();
    
    // スムーススクロール処理
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if(target.length) {
        event.preventDefault();
        // 開いている画面の横幅を取得し、PCかスマホでスクロールする位置をずらす
        var width = $(window).width();
        if(width < 800){
          width = 0;
        }else{
          width = -40;
        }
        $('html, body').stop().animate({
          scrollTop: target.offset().top + width,
        }, 0);
      }
    });

    // ハンバーガーメニュー押下処理
    $('.menu-trigger, .opened_hamberger ul li a').on('click', function(event) {
      $('.opened_hamberger').toggleClass("opened");
      $('.menu-trigger').toggleClass("opened");
    });

    // PC用。ヘッダーメニュー表示非表示処理
    var nav = $('header');

    // メニューのtop座標を取得する
    var offsetTop = nav.offset().top;
    
    var floatMenu = function() {
        // スクロール位置がメニューのtop座標を超えたら固定にする
        if ($(window).scrollTop() > offsetTop) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    }
    $(window).scroll(floatMenu);
    $('body').bind('touchmove', floatMenu);
  
    // Intersection Observer for slide effect
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        } else {
          entry.target.classList.remove('is-active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.area').forEach(section => {
      observer.observe(section);
    });

    document.querySelectorAll('.area').forEach(section => {
      observer.observe(section);
    });

  });
}); 