$(function () {
	/*:::::::::::::::::::::::переменные:::::::::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::переменные-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::tabs:::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".product-tabs__top-item").on("click", function (e) {
		e.preventDefault();
		$(".product-tabs__top-item").removeClass(
			"product-tabs__top-item--active"
		);
		$(this).addClass("product-tabs__top-item--active");

		$(".product-tabs__content-item").removeClass(
			"product-tabs__content-item--active"
		);

		$($(this).attr("href")).addClass("product-tabs__content-item--active");
	});
	/*:::::::::::::::::::::::tabs-finish::::::::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::product-slide__thumb-slider::::::::::::::::::::::::::::::*/
	$(".product-slide__thumb").slick({
		asNavFor: ".product-slide__big",
		focusOnSelect: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
	});
	/*:::::::::::::::::::::::product-slide__thumb-slider-finish:::::::::::::::::::::::*/
	/*:::::::::::::::::::::::product-slide__big-slider::::::::::::::::::::::::::::::::*/
	$(".product-slide__big").slick({
		asNavFor: ".product-slide__thumb",
		draggable: false,
		arrows: false,
		fade: true,
	});
	/*:::::::::::::::::::::::product-slide__big-slider-finish:::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::переключение-карточек::::::::::::::::::::::::::::::::::::*/
	$(".shop-content__filter-btn").on("click", function () {
		$(".shop-content__filter-btn").removeClass(
			"shop-content__filter-btn--active"
		);
		$(this).addClass("shop-content__filter-btn--active");
	});

	$(".button-list").on("click", function () {
		$(".product-item").addClass("product-item--list");
	});

	$(".button-grid").on("click", function () {
		$(".product-item").removeClass("product-item--list");
	});
	/*:::::::::::::::::::::::переключение-карточек-finish:::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::select:::::::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".select-style, .product-one__item-num").styler();
	/*:::::::::::::::::::::::select-finish::::::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::filter-price:::::::::::::::::::::::::::::::::::::::::::::*/
	$(".filter-price__input").ionRangeSlider({
		type: "double",
		prefix: "$",
		onStart: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
		onChange: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
	});
	/*:::::::::::::::::::::::filter-price-finish::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::top-slider:::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".top-slider__inner").slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	/*:::::::::::::::::::::::top-slider-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::rateyo:::::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".star").rateYo({
		starWidth: "17px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		readOnly: true,
	});
	/*:::::::::::::::::::::::rateyo-finish::::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::timer::::::::::::::::::::::::::::::::::::::::::::::::::*/
	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

		return {
			total,
			days,
			hours,
			minutes,
			seconds,
		};
	}

	function initializeClock(id, endtime) {
		const clock = document.querySelector(".promo__clock");
		const daysSpan = clock.querySelector(".promo__days");
		const hoursSpan = clock.querySelector(".promo__hours");
		const minutesSpan = clock.querySelector(".promo__minutes");
		const secondsSpan = clock.querySelector(".promo__seconds");

		function updateClock() {
			const t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
			minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
			secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	}

	const deadline = $(".promo__clock").attr("data-time");
	initializeClock("promo__clock", deadline);
	/*:::::::::::::::::::::::timer-finish:::::::::::::::::::::::::::::::::::::::::::*/
});
