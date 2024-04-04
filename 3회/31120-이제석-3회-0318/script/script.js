jQuery(document).ready(function () {
	$(".main>li").mouseover(function () {
		$(this).find(".sub").stop().slideDown();
	});
	$(".main>li").mouseout(function () {
		$(this).find(".sub").stop().slideUp();
	});
});

// jQuery(document).ready(function () {
// 	$(".main>li").mouseover(function () {
// 		$(".sub").stop().slideDown();
// 	});
// 	$(".main>li").mouseout(function () {
// 		$(".sub").stop().slideUp();
// 	});
// });
