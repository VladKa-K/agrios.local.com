import Swiper from 'swiper/bundle';

$(document).ready(function(){
    (function ($) {
        const swiper = new Swiper('.js--hero-banner-slider', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            speed: 1000,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
    })(jQuery);
}); 