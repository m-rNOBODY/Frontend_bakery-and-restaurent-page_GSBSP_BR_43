$(window).scroll(function () { 
    $("nav").toggleClass("scrolled", $(this).scrollTop()>600)
    $(".logo").toggleClass("scrolled", $(this).scrollTop()>600)
});