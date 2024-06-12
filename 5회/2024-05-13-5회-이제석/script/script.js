jQuery(document).ready(() => {
	$(".main>li").mouseover(() => {
		$(".sub").stop().slideDown();
	});

	$(".main>li").mouseout(() => {
		$(".sub").stop().slideUp();
	});

	setInterval(() => {
		$(".imgs").animate({ marginLeft: -1200 }, 1000, () => {
			$(".imgs li:first").appendTo(".imgs");
			$(".imgs").css({ marginLeft: 0 });
		});
	}, 2000);

	$("#tab1, #tab2").click(function () {
		if ($(this).hasClass("off")) {
			if (this.id === "tab1") {
				$(".gal").hide();
				$(".notice").show();
				$("#tab2").addClass("off");
			} else {
				$(".gal").show();
				$(".notice").hide();
				$("#tab1").addClass("off");
			}
			$(this).removeClass("off");
		}
	});
});
