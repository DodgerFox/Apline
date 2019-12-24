'use strict'

window.onload = function () {
  openList()
  scrollPage()
  notificationsOld()
}


$('.slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  dots: false
});

function slickInit() {
  var current = $(".slider").slick('slickCurrentSlide'),
      all = $(".slider").find('.slider-item').length;
  $('.slider-counter__all').html(all)
}
slickInit()

$('.next-arrow').click(function(){
    $(".slider").slick('slickNext');
    var current = $(".slider").slick('slickCurrentSlide'),
    all = $(".slider").find('.slider-item').length;
    current++
    $('.prev-arrow').removeClass('disabled')
    $('.slider-counter__change').html(current)
    if (current === 1) {
      $('.prev-arrow').addClass('disabled')
    }else if(current === all){
      $('.next-arrow').addClass('disabled')
    }
});

$('.prev-arrow').click(function(){
    $(".slider").slick('slickPrev');
    var current = $(".slider").slick('slickCurrentSlide'),
    all = $(".slider").find('.slider-item').length;
    current++
    $('.slider-counter__change').html(current)
    if (current === 1) {
      $('.prev-arrow').addClass('disabled')
    }else if(current === all){
      $('.next-arrow').addClass('disabled')
    }
});



function scrollPage() {

$(".scroll-button").on("click", function() {
    var attrib = $(this).attr('href');
    event.preventDefault()
    $("html,body").stop().animate({
      scrollTop: $(attrib).offset().top
    }, 1e3)
})

}


function openList() {

  var listBody = $('.shedule-list'),
    opened = false;

  $(".shedule-button").on("click", function() {
      event.preventDefault()

      if (opened === false) {
        $(listBody).addClass('open')
        $(this).addClass('open')
        $(this).find('p').html('Свернуть')
        opened = true;
      }else{
        $(listBody).removeClass('open')
        $(this).removeClass('open')
        $(this).find('p').html('Загрузить больше')
        opened = false;
      }
  })
}
