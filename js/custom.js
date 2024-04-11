/* Change Color Preset */
jQuery(function ($) {  
  if ($('.home').length > 0) {
    a = $(".sp-megamenu-parent > li.active > a").css("color");
        document.documentElement.style.setProperty('--background-color',a)
        document.documentElement.style.setProperty('--text-color',a)
  }
  else {
     a = $(".sp-page-title").css("backgroundColor");
     document.documentElement.style.setProperty('--background-color',a)
     document.documentElement.style.setProperty('--text-color',a)
  }
});

/* Counter */
jQuery(function ($) {  
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});