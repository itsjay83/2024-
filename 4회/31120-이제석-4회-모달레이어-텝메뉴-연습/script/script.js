jQuery(document).ready(() => {
	$(".main>li").mouseover(function () {
		$(".sub").stop().slideDown();
		$(".sub_bg").stop().slideDown();
	});

	$(".main>li").mouseout(() => {
		$(".sub").stop().slideUp();
		$(".sub_bg").stop().slideUp();
	});

	// `setInterval` 함수를 사용해 주어진 함수를 반복 실행한다.
	// jQuery의 `animate` 함수를 사용해 `.imgs` 클래스를 가진 요소의 CSS 속성을 애니메이션과 함께 변경힌다.
	// 여기서는 `marginLeft` 속성을 -1200px로 변경하여 이미지가 왼쪽으로 슬라이드되는 효과를 만든다
	// `.imgs li:first` 셀렉터를 사용해 `.imgs` 요소 내 첫 번째 `<li>` 요소를 찾고, `appendTo` 함수를 사용해 해당 `<li>` 요소를 `.imgs` 요소의 마지막에 추가한다.
	// `.imgs` 요소의 `marginLeft` 속성을 0으로 설정하여 위치를 초기화한다.
	// setInterval(() => {
	// 	$(".imgs").animate({ marginLeft: -1200 }, 1000, () => {
	// 		$(".imgs li:first").appendTo(".imgs");
	// 		$(".imgs").css({ marginLeft: 0 });
	// 	});
	// }, 2000);

	setInterval(() => {
		$(".imgs").animate({ marginTop: -300 }, 1000, () => {
			$(".imgs li:first").appendTo(".imgs");
			$(".imgs").css({ marginTop: 0 });
		});
	}, 2000);

	$(".notice li:first").click(() => {
		$(".popup").show();
		$(".modal").show();
	});

	$(".p_bottom button").click(() => {
		$(".popup").hide();
		$(".modal").hide();
	});

	$("#tab1, #tab2").click(function () {
		if ($(this).hasClass("disabled")) {
			if (this.id === "tab1") {
				$(".gal").hide();
				$(".notice").show();
				$("#tab2").addClass("disabled");
			} else {
				$(".gal").show();
				$(".notice").hide();
				$("#tab1").addClass("disabled");
			}
			$(this).removeClass("disabled");
		}
	});
});
