jQuery(document).ready(() => {
	$(".main>li").mouseover(function () {
		$(this).find(".sub").stop().slideDown();
	});

	$(".main>li").mouseout(function () {
		$(this).find(".sub").stop().slideUp();
	});

	$(".notice li:first").click(() => {
		$(".popup").show();
		$(".mbg").show();
	});

	$(".close button").click(() => {
		$(".popup").hide();
		$(".mbg").hide();
	});

	setInterval(() => {
		$(".imgs").delay(1000);
		$(".imgs").animate({ marginLeft: "-100%" }, 2000, () => {
			$(".imgs li:first").appendTo(".imgs");
			$(".imgs").css({ marginLeft: 0 });
		});
	});
});
