jQuery(document).ready(() => {
	$(".main li").mouseover(function () {
		$(this).find(".sub").stop().slideDown();
	});

	$(".main li").mouseout(function () {
		$(this).find(".sub").stop().slideUp();
	});

	$(".notice li").click(() => {
		$(".block").show();
		$(".popup").show();
	});

	$(".close").click(() => {
		$(".block").hide();
		$(".popup").hide();
	});

	setInterval(function () {
		$(".imgs").animate({ marginLeft: "-100%" }, 1000, () => {
			$(".imgs li:first").appendTo(".imgs");
			$(".imgs").css({ marginLeft: 0 });
		});
	}, 2000);
});
