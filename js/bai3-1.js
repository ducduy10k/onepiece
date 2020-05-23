$(document).ready(function() {

$('.menutren a').click(function(event) {
event.preventDefault();



$('html, body').animate({scrollTop: 1600},1400);
});
});