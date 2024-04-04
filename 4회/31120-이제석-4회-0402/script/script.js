jQuery(document).ready(function () {
	$(".main>li").mouseover(function () {
		$(".sub").stop().slideDown();
		$(".sub_bg").stop().slideDown();
	});

	$(".main>li").mouseout(function () {
		$(".sub").stop().slideUp();
		$(".sub_bg").stop().slideUp();
	});

	setInterval(() => {
		$(".imgs").animate({ marginLeft: -1200 }, 1000, () => {
			$(".imgs li:first").appendTo(".imgs");
			$(".imgs").css({ marginLeft: 0 });
		});
	}, 2000);
});
