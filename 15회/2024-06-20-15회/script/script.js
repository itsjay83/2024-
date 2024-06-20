jQuery(document).ready(() => {
	$(".main>li, .bg").mouseover(() => {
		$(".sub, .bg").stop().fadeIn("fast");
	});

	$(".main>li, .bg").mouseout(() => {
		$(".sub, .bg").stop().fadeOut("fast");
	});
});
