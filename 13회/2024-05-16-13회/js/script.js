jQuery(document).ready(() => {
	$(".main li").mouseover(function () {
		$(this).find(".sub").stop().slideDown();
	});
	$(".main li").mouseout(function () {
		$(this).find(".sub").stop().slideUp();
	});

	setInterval(() => {
		$(".imgs").animate({ marginTop: -400 }, 1000, () => {
			$(".imgs li:first").appendTo(".imgs");
			$(".imgs").css({ marginTop: 0 });
		});
	}, 2000);
});
