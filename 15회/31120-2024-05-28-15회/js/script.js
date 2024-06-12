jQuery(document).ready(() => {
	$(".main li").mouseover(() => {
		$(".bg, .sub").stop().fadeIn("fast");
	});
	$(".main li").mouseout(() => {
		$(".bg, .sub").stop().fadeOut("fast");
	});
});
