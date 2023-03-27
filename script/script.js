$('.edit-button').click(function(){
    $(this).closest('.acc-form-field').find('input').removeAttr('readonly').focus();
})


$("input[type=radio]").click(function () {
  if($(this).prop("checked", true)) {
      $(this).parent().addClass('isChecked');
      $(this).parent().siblings().removeClass('isChecked');
    }
});

// ============= faqs page =========
$('.site-faq-section:not(:first-child)').hide();
$('.topics-wrapper .topic:first-child .topic-title').addClass('active');
$('.topic-title').click(function(){
  $('.topic-title').removeClass('active');
    $(this).addClass('active');
    var showInnerFaqs = $(this).data('target');
    $('.site-faq-section').hide();
    $(showInnerFaqs).fadeIn();
});
$('.site-faq-single .site-faq-single-body').hide();
$('.site-faq-single:first-child .site-faq-single-body').show();
$('.site-faq-single:first-child').addClass('active');
$('.site-faq-question').click(function(){
  $(this).parent().siblings().children('.site-faq-single-body').slideUp();
  $(this).siblings('.site-faq-single-body').slideToggle();
  $(this).parent('.site-faq-single').siblings().removeClass('active');
  $(this).parent('.site-faq-single').toggleClass('active');
})

// if ($('.site-faq-single:first-child').hasClass('active')) {
//     $('.topics-wrapper .topic:first-child .topic-title').removeClass('active');
// } else {
//   $('.topics-wrapper .topic:first-child .topic-title').addClass('active');
// }

// About Us Page

$('.about-intro-slider').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slideToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 3,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        infinite: true,
      }
    }
  ]
});

$('.about-leadership-slider').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slideToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 3,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        infinite: true
      }
    }
  ]
});

$('.second-header-right .header-hamburger button').click(function(){
  $(this).toggleClass('active');
  $('.second-header-nav').toggleClass('nav-active');
  $('body').toggleClass('no-scroll');
});
$('.side-bar-opener button').click(function(){
  $('.home-content-right').addClass('nav-active');
  $('body').addClass('no-scroll-2');
});
$('.side-bar-close button').click(function(){
  $('.home-content-right').removeClass('nav-active');
  $('body').removeClass('no-scroll-2');
});

$('.header-nav-hamburger').click(function(){
  $('body').toggleClass('no-scroll-3');
});

$('.header-right .header-nav-hamburger button').click(function(){
  $(this).toggleClass('active');
  $('.header-nav').toggleClass('nav-active');
});
////////
$('.light-mode a').click(function(e){
  e.preventDefault();
  $('body').addClass('light-mode-active');
  $('body').removeClass('dark-mode-active');
})


////////////////////////////////

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const body = document.querySelector('body');


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        body.classList.add('light-mode-active');
        body.classList.remove('dark-mode-active');
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        body.classList.add('light-mode-active');
        body.classList.remove('dark-mode-active');
    }
    else { 
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        body.classList.remove('light-mode-active');
        body.classList.add('dark-mode-active');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// log in form password see hide function

function myFunction() {
    var x = document.getElementById("pass-field");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  
  function myFunction1() {
   var y = document.getElementById("mySHow");
     y.classList.toggle("changeIcon");
  };

  // sign up form password see hide function

var password = document.getElementById('pass-field');

var validPassword = {
    charLength: document.querySelector('.valid-password .length')
};

var pattern = {
  
    charLength: function() {
      if( password.value.length >= 8 && password.value.length <= 20 ) {
        return true;
      }
    }
};




// Listen for keyup action on password field
password.addEventListener('keyup', function (){
    patternTest( pattern.charLength(), validPassword.charLength );
      
    // Check that all requirements are fulfilled
    if( hasClass(validPassword.charLength, 'valid')
      ) {
      addClass(password.parentElement, 'valid');
    }
    else {
      removeClass(password.parentElement, 'valid');
    }
});

// Pattern Test function
function patternTest(pattern, response) {
    if(pattern) {
      addClass(response, 'valid');
    }
    else {
      removeClass(response, 'valid');
    }
  }
  
  // Has Class Function 
  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);    
    }
    else {
      new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); 
    }
  }
      
  // Add Class Function
  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    }
    else {
      el.className += ' ' + className;
    }
  }
    
  // Remove Class Function
  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }