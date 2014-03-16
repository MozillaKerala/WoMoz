	var vmoz = document.getElementById('htmlPlayer');
	function playVideo(){
		$('#videoOverlay').fadeOut(400);
		vmoz.play();
	}

	$("#htmlPlayer").bind("ended", function() {
		$('#videoOverlay').fadeIn(400);
	});

	function small_gotoAnchor(aid) {
		$("html,body").delay(500).animate({ scrollTop: $("#"+aid).offset().top },'slow');
	}

	function gotoAnchor(aid) {
		$("html,body").animate({ scrollTop: $("#"+aid).offset().top },'slow');
	}

	$(document).foundation();

	$(document).ready(function(){
		$(window).scroll(function(){
			var h = $(window).scrollTop();
			if(h>100){
				$(".top-button").fadeIn(500);
			}else{
				$(".top-button").fadeOut(500);
			}
		});
	});