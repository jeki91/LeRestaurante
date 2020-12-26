new Swiper('.online', {
	navigation: {
		nextEl: '.next-offer',
		prevEl: '.prev-offer',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoHeight: true,
});