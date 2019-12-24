'use strict'

window.onload = function () {
  scrollPage()
  openArticle()
  openVacancy()
  socialsSwitch()
  openPopup()
  customSubmit()
  headerSearch()
  headerGamburger()
  submenuOpen()
  filesUpload()
  initMask()
}

window.onscroll = function () {
  fixHeader()
}

$('.slider').slick({
  infinite: false,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  dots: false
});

function slickInit() {
  var current = $(".slider").slick('slickCurrentSlide');

  $('.slider').each(function (index, elem) {
    var allSlides = $(elem).find('.slider-item').length;
    $(elem).prev().find('.slider-counter__all').html(allSlides);

  })
  $('.prev-arrow').addClass('disabled')
}
slickInit()

$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var crnt = currentSlide;
  crnt++;
  $(this).prev().find('.slider-counter__change').html(crnt++)
});

$('.next-arrow').click(function(){
    var currentSlider = $(this).parent().parent().parent().next();
    $(currentSlider).slick('slickNext');
    var current = $(currentSlider).slick('slickCurrentSlide'),
    all = $(currentSlider).find('.slider-item').length;
    current++
    $(this).prev().removeClass('disabled')
    $(currentSlider).prev().find('.slider-counter__change').html(current)
    if (current === 1) {
      $(this).prev().addClass('disabled')
    }else if(current === all){
      $(this).addClass('disabled')
    }
});

$('.prev-arrow').click(function(){
    var currentSlider = $(this).parent().parent().parent().next();
    $(currentSlider).slick('slickPrev');
    var current = $(currentSlider).slick('slickCurrentSlide'),
    all = $(currentSlider).find('.slider-item').length;
    current++
    $(currentSlider).prev().find('.slider-counter__change').html(current)
    $(this).next().removeClass('disabled')
    if (current === 1) {
      $(this).addClass('disabled')
    }else if(current === all){
      $(this).next().addClass('disabled')
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



function fixHeader() {
  var header = document.querySelector('.header-main'),
      headerDuble = document.querySelector('.header_duble'),
      submenu = document.querySelector('.submenu'),
      offsetTop = header.getBoundingClientRect();
  if (offsetTop.top > 0) {
    headerDuble.classList.remove('fixed')
    submenu.classList.remove('fixed')
  }else{
    headerDuble.classList.add('fixed')
    submenu.classList.add('fixed')
  }
}


function openArticle() {
  if (!'.article__button') {
  }else{
    $('.article__button').click(function () {
      var content = $(this).prev();
      if($(this).hasClass('closed')){
        $(content).removeClass('open')
        $(this).removeClass('closed')
        $(this).find('p').html('Показать полностью')
      }else{
        $(content).addClass('open')
        $(this).addClass('closed')
        $(this).find('p').html('Скрыть')
      }
    })
  }

}

function openVacancy() {
  $('.vacancy-item-button').click(function () {
    var item = $(this).parent().parent();
    $('.vacancy-item-button p').html('Узнать подробности')
    if ($(item).hasClass('open')) {
      $('.vacancy-item').removeClass('open')
      item.removeClass('open')
      $(this).removeClass('close')
      $(this).find('p').html('Узнать подробности')
    }else{
      $('.vacancy-item').removeClass('open')
      item.addClass('open')
      $(this).addClass('close')
      $(this).find('p').html('скрыть')
    }
  })
}

function socialsSwitch() {
  $('.socials-button').click(function () {
    var socials = $(this).parent();
    if ($(socials).hasClass('open')) {
      socials.removeClass('open')
    }else{
      socials.addClass('open')
    }
  })
}

function initMask() {
    $(".input-phone").inputmask({"mask": "+7(999) 999-9999"})
}

function openPopup() {
  $('.popopen').click(function () {
    $('.popups').fadeIn()
    if (window.innerWidth < 767) {
      $('body').addClass('fixed')
    }
  })
  $('.popups-close').click(function () {
    $('.popups').fadeOut()
    $('body').removeClass('fixed')
  })
}

function customSubmit() {
  $('form .simple-button').click(function () {
    $(this).parent().on('submit', function () {
      alert('form')
      $('.popups').fadeIn()
    })
    $(this).prev().click()
  })

}

function headerSearch() {
  $('.header-search').click(function () {
    $('.search').addClass('open').find('input').focus()
    if (window.innerWidth < 767) {
      $('body').addClass('fixed')
    }
    $(document).on("click", function (e){
      var div = $(".header-search");
      if (!div.is(e.target)
      && div.has(e.target).length === 0) {
        $('.search').removeClass('open')
      }
    });
  })
  $('.search-close').click(function () {
    $('.search').removeClass('open')
    $('body').removeClass('fixed')
  })
}

function headerGamburger() {
  $('.header-gamburger').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.header_duble .nav-top').removeClass('open')
      $('body').removeClass('fixed')
    }else{
      $(this).addClass('active')
      $('.header_duble .nav-top').addClass('open')
      if (window.innerWidth < 767) {
        $('body').addClass('fixed')
      }
      $(document).on("click", function (e){
        var div = $(".header-gamburger");
        if (!div.is(e.target)
        && div.has(e.target).length === 0) {
          $('.header-gamburger').removeClass('active')
          $('.header_duble .nav-top').removeClass('open')
        }
      });

    }
  })
}

function submenuOpen() {
    $('.subtrigger').click(function () {
      if ($('.submenu').hasClass('open')) {
        $('.submenu').removeClass('open')
        $('body').removeClass('fixed')
      }else{
        if (window.innerWidth < 767) {
          $('body').addClass('fixed')
        }
        $('.submenu').addClass('open')
        $(document).on("click", function (e){
          var div = $(".subtrigger");
          if (!div.is(e.target)
          && div.has(e.target).length === 0) {
            $('.submenu').removeClass('open')
          }
        });
      }
    })
}

function filesUpload() {
  let fileInput = document.querySelectorAll('input[type="file"]');

  fileInput.forEach(function (element) {
    element.addEventListener('change', () => {
      const name = element.value.split(/\\|\//).pop();
      const fileInfo = $(element).parent().find('.file-info');
      const truncated = name.length > 20
        ? name.substr(name.length - 20)
        : name;

      $(fileInfo).addClass('value').find('p').html(truncated)

      const closeEl = $(fileInfo).find('img');
      $(closeEl).click(function () {
        $(element).val('')
        $(fileInfo).removeClass('value').find('p').html('')
      })
    });

  })


}
