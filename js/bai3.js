$(document).ready(function() {
console.log("Tinh vi tri chapter 1 ban ham .offset().top");
console.log($('.chapter1').offset().top);


//scroll piece
$('.menutren ul li:nth-child(1) a').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop: $('.home').offset().top},1400);
});
//end scroll


$('.menutren ul li:nth-child(2) a').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop: $('.chapter1').offset().top},1400);
});


//scroll piece
$('.menutren ul li:nth-child(3) a').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop: $('.chapter2').offset().top},1400);
});
//end scroll

//scroll piece
$('.menutren ul li:nth-child(4) a').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop: $('.chapter3').offset().top},1400);
});
//end scroll

//scroll piece
$('.menutren ul li:nth-child(5) a').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop: $('.chapter4').offset().top},1400);
});
//end scroll

//scroll piece
$('.menutren ul li:nth-child(6) a').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop: $('.chapter5').offset().top},1400);
});
//end scroll


// viet cho nut back to top
//scroll piece
$('.backToTop').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop:0},1400,"easeOutExpo");//phanh từ từ
});
//end scroll
// sử dụng gia tốc cho scroll , sử dụng thư viện easing jquery 
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
 //<script src="../js/jquery.easing.1.3.js"></script>


//-----------sử lý  giao diện saga---------------
$('.menuarc').slideUp(100);
$('.saga').click(function(event) {
	/* Act on the event */
	//$('.menuarc').slideUp(100);

	$(this).next().slideToggle();
});



});