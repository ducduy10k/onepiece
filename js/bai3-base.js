// $(function() {
	
// 	$('.menutren ul li a').on('click',function(event) {
// 		console.log("da click");
// 		event.preventDefault();// k cho chuyển trang
// 		$('body').animate({
// 			scrollTop: 900},1000
// 			);
// 	});
// });  lỗi ??? tại sao để body lại k scrollTop được ???
$(document).ready(function() {
console.log("Tinh vi tri chapter 1 ban ham .offset().top");
console.log($('.chapter1').offset().top);
$('.menutren a').click(function(event) {
event.preventDefault();



$('html').animate({scrollTop: 1700},1400);
});
});