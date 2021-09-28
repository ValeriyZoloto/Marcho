$(function () {
	/*:::::::::::::::::::::::menu:::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".menu__btn").on("click", function () {
		$(".menu__btn").toggleClass("menu__btn--active");
		$(".menu__list").toggleClass("menu__list--active");
	});

	$(".footer-top__title--active").on("click", function () {
		$(this).next().slideToggle();
	});
	/*:::::::::::::::::::::::menu-finish::::::::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::blog-page__slider::::::::::::::::::::::::::::::::::::::::*/
	$(".blog-page__slider").slick({
		prevArrow:
			'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9pt" height="14pt" viewBox="0 0 9 14" version="1.1"><g><path d="M 1.113281 6.535156 L 5.894531 2.816406 C 6.226562 2.558594 6.761719 2.558594 7.085938 2.816406 L 7.882812 3.433594 C 8.210938 3.691406 8.210938 4.105469 7.882812 4.359375 L 4.496094 7 L 7.886719 9.636719 C 8.214844 9.894531 8.214844 10.308594 7.886719 10.5625 L 7.089844 11.183594 C 6.761719 11.441406 6.226562 11.441406 5.898438 11.183594 L 1.117188 7.464844 C 0.785156 7.207031 0.785156 6.792969 1.113281 6.535156 Z M 1.113281 6.535156 "/></g></svg></button>',
		nextArrow:
			'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9pt" height="14pt" viewBox="0 0 9 14" version="1.1"><g><path d="M 7.886719 7.464844 L 3.105469 11.183594 C 2.773438 11.441406 2.238281 11.441406 1.914062 11.183594 L 1.117188 10.566406 C 0.789062 10.308594 0.789062 9.894531 1.117188 9.640625 L 4.507812 7.003906 L 1.117188 4.367188 C 0.789062 4.109375 0.789062 3.695312 1.117188 3.441406 L 1.910156 2.816406 C 2.238281 2.558594 2.773438 2.558594 3.101562 2.816406 L 7.882812 6.535156 C 8.214844 6.792969 8.214844 7.207031 7.886719 7.464844 Z M 7.886719 7.464844 "/></g></svg></button>',
		infinite: false,
	});
	/*:::::::::::::::::::::::blog-page__slider-finish:::::::::::::::::::::::::::::::::*/
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
		starSvg:
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="18pt" height="16pt" viewBox="0 0 18 16"version="1.1"><g id="surface1"><path style=" stroke:none;" d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
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
	/*:::::::::::::::::::::::map::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	let map;

	function initMap() {
		map = new google.maps.Map(document.getElementById("map"), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		});
	}

	/*:::::::::::::::::::::::map-finish:::::::::::::::::::::::::::::::::::::::::::::::*/
});
