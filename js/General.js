/*=============================================
TOP HEADER
=============================================*/
var header = document.getElementById('top')

window.addEventListener('scroll', ()=> {
	var scroll = window.scrollY
	if(scroll>=11){
		header.style.background = '#fff'
	}else{
		header.style.background = 'transparent'
	}
})

/*=============================================
NAVEGACIÓN SCROLL
=============================================*/

$(".nav-link").click(function(e){
	e.preventDefault();
	var target = $(this).attr("href");	
	$("html, body").animate({
		scrollTop: $(target).offset().top
	},1000, "easeOutBack")
})

/*=============================================
SCROLL UP
=============================================*/

$(function (){
		$.scrollUp({
			scrollText: "",
			scrollSpeed:2000,
			easingType: "easeOutQuint"
		})
	})

/*========================================
PUSHBAR MOVIL
========================================*/
var pushbar = new Pushbar({
	blur: true, 
	overlay: true
})
