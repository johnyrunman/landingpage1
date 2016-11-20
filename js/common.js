$(document).ready(function() {

	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.review_popup').magnificPopup({type:"image"});
	$('.popup_c').magnificPopup();

	$.stellar({
		responsive: true
	});

	$(".carousel").owlCarousel({
		loop : true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	function wResize() {
		$("header").css("min-height", $(window).height())
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
});

$(window).load(function() {
	$(".tabs_header .wrapper").animated("fadeInUp", "fadeInOut");
	$(".profi_item").animated("fadeInLeft", "fadeOutLeft");
});