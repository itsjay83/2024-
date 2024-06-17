jQuery(document).ready(() => {
	$(".imgs li:gt(0)").hide();
	setInterval(() => {
		$(".imgs li:first").fadeOut().next().fadeIn().end().appendTo(".imgs");
	}, 2000);

	$("#tab1, #tab2").click(function () {
		if ($(this).hasClass("isOff")) {
			if (this.id === "tab1") {
				$(".gal").hide();
				$(".notice").show();
				$("#tab2").addClass("isOff");
			} else {
				$(".gal").show();
				$(".notice").hide();
				$("#tab1").addClass("isOff");
			}
			$(this).removeClass("isOff");
		}
	});
});
