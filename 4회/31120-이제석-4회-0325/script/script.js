jQuery(document).ready(function () {
	$(".main>li").mouseover(function () {
		$(".sub").stop().slideDown();
		$(".sub_bg").stop().slideDown();
	});

	$(".main>li").mouseout(function () {
		$(".sub").stop().slideUp();
		$(".sub_bg").stop().slideUp();
	});

	$(".imgslide li:gt(0)").hide();
	setInterval(() => {
		$(".imgslide li:first")
			.fadeOut()
			.next("li")
			.fadeIn()
			.end()
			.appendTo(".imgslide ul");
	}, 2000);
});
