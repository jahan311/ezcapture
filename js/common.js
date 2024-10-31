$(document).ready(function(){
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('bd');
        } else {
            $('.header').removeClass('bd');
        }
    });
    $(window).on('scroll', function() {
        $('.contents section:not(.section04) .inner').each(function() {
            const sectionTop = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > sectionTop + 150) {
                $(this).addClass('visible');
            }
        });
    });
    $(window).trigger('scroll');

    $('.header nav ul li').each(function(index) {
        $(this).on('click', function() {
            let targetOffset;
            if (index === 0) {
                targetOffset = 0;
            } else if (index === 1) {
                targetOffset = $('.section02').offset().top;
            } else if (index === 2) {
                targetOffset = $('.section03').offset().top;
            }
            $('html, body').animate({ scrollTop: targetOffset }, 700, 'swing');
        });
    });
    
    $('.section03 .tab li').on('click', function() {
        $('.section03 .tab li').removeClass('active');
        $('.section03 .tab_box').removeClass('show');
    
        $(this).addClass('active');
        $('.section03 .tab_box').eq($(this).index()).addClass('show');
    });    
});