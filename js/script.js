'use strict';

$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

// gnb 메뉴
// menuOpen 클래스를 클릭하면 gnb on클래스를 생성하고
// .gnb .close, section를 클릭하면 gnb 의 on 클래스를 삭제
$(function() {
    $('header .menuOpen').on('click', function() {
        $('.gnb').addClass('on');
    });
    $('.gnb .close, section').on('click', function() {
        $('.gnb').removeClass('on');
    });
});


// fixheader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

function fixHeader() {
    if (scrollTop > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

// window 창 이벤트
$(window).on('scroll resize', function() {
    scrollTop = $(document).scrollTop();
    fixHeader();
}); 


// 스크롤 애니메이션
$(function() {
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});


// 상단으로 부드럽게 ( 0.4s )
$(function() {
    $('.goTop').on('click', function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400 );
    });
});

// 이미지 슬라이드
$(function() {
    $('.visual .slide').slick({
        arrows: true,   // 화살표
        dots: false,    // 인디케이트 해제
        fade: true,     // 페이드인 효과
        autoplay: true,
        autoplaySpeed: 4000,    // 4초
        pauseOnHover: false,
        pauseOnFocus: false
    });
});