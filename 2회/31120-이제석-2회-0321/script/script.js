jQuery(document).ready(function () {
	$(".main").mouseover(function () {
		$(".sub").stop().slideDown();
		$(".bgmenu").stop().slideDown();
	});
	$(".main").mouseout(function () {
		$(".sub").stop().slideUp();
		$(".bgmenu").stop().slideUp();
	});

	
});
