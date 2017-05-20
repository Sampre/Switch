$(document).ready(function(){

	$('.main-header').parallax({imageSrc: 'img/background.jpg'});

//height detect :)
function heightDetect() {
	$('.main-header').css('height', $(window).height());
};
heightDetect();
$(window).resize(function() {
	heightDetect();
})

//menu
$('.toggle-menu').click(function(){
	$('body').toggleClass('mobile-menu');
	return false;
})
$(document).click(function(){
	$('body').removeClass('mobile-menu');
})

//scroll
$('.link, .scroll-down').click(function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

$('.scroll-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
});

//for mixitup
$('.filter').click(function(){
	$('.filter').removeClass('active');
	$(this).addClass('active');
});

$(function(){
	$('#mix-content').mixItUp();
});

//magnific
$('.image-popup').magnificPopup({
	type: 'image',
	zoom: {
		enabled: true,
		duration: 300
	}
});

$('.popup-form').magnificPopup({
	type: 'inline'
});

//flickity slider
$('.main-carousel').flickity({
	cellAlign: 'left',
	contain: true,
	setGallerySize: true,
	pageDots: false
});

	// $(function () {
	// 	$(".mix").slice(0, 10).show();
	// 	$("#viewMore").on('click', function (e) {
	// 		// e.preventDefault();
	// 		$(".mix:hidden").slice(0,10).slideDown();
	// 		if ($(".mix:hidden").length == 0) {
	// 			$("#viewMore").fadeOut('slow');
	// 		}
	// 	});
	// });


});

new WOW().init();