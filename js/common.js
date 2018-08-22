$(function() {

	// fixed menu

	$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			// новые стили
			$("#header").css("background", "#fff");
			$(".search-top i").css("color", "#808080");
		} else {
			// старые стили
			$("#header").css("background", "#fff");
			$(".search-top i").css("color", "#5181B8");
		};
	});

	// responsive menu
	$('.btn-menu').click(function(){
		$('.menu-item').slideToggle(300);
	});
	
	$(".ul-class a").click(function(){
        $(".menu-item").hide(0);
    });

    // scroll top
    var $btnTop = $(".btn-top")
	$(window).on("scroll", function(){
		if ($(window).scrollTop() >20){
			$btnTop.fadeIn();
		}else{
			$btnTop.fadeOut();
		}
	});

	$btnTop.on("click", function(){
		$("html,body").animate({scrollTop:0}, 800)
	});



});

