;
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();;
$(".icon__menu").click(function () {
	$(this).toggleClass("active");
	$('.menu__body, .header__nav').toggleClass('active');
	$('body').toggleClass('lock');
})
$(".close").click(function () {
	$('.icon__menu').removeClass("active");
	$('.menu__body, .header__nav').removeClass('active');
	$('body').toggleClass('lock');
});

$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true
	});
});


var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar'
	},


	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
})
if (document.documentElement.clientWidth > "1100") {
	var mySwiper = new Swiper('.swiper-container-life', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},


		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})

}
if (document.documentElement.clientWidth < "1100") {
	var mySwiper = new Swiper('.swiper-container-life', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},


		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})

}
if (document.documentElement.clientWidth < "767") {
	var mySwiper = new Swiper('.swiper-container-life', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},


		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})

}
if (document.documentElement.clientWidth < "567") {
	var mySwiper = new Swiper('.swiper-container-life', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},


		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})

}



var mySwiper = new Swiper('.swiper-container-courses', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination-courses',
		type: 'bullets'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
})
if (document.documentElement.clientWidth > "1100") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}
if (document.documentElement.clientWidth < "1100") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}
if (document.documentElement.clientWidth < "767") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}
if (document.documentElement.clientWidth < "520") {
	var mySwiper = new Swiper('.container__partners-body', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-courses',
			type: 'bullets'
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		
	})
}


var mySwiper = new Swiper('.swiper-container-home', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination-courses',
		type: 'bullets'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
})

;
const animItems = document.querySelectorAll(".anim-items");
const animItems_two = document.querySelectorAll(".anim-side");

if (animItems.length > 0) {
	document.querySelector("body").addEventListener('scroll', animOnSCroll);

	function animOnSCroll() {

		for (let index = 0; index < animItems.length; index++) {

			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);


			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add("active");

			}
			// else {
			// 	animItem.classList.remove("active");


			// }

		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft
		}
	}
	animOnSCroll();
}

if (animItems_two.length > 0) {
	document.querySelector("body").addEventListener('scroll', animOnSCroll__two);

	function animOnSCroll__two() {

		for (let index = 0; index < animItems_two.length; index++) {
			const animItemTwo = animItems_two[index];
			const animItemHeightTwo = animItemTwo.offsetHeight;
			const animItemOffsetTwo = offset(animItemTwo).top;
			const animStartTwo = 4;


			let animItemPointTwo = window.innerHeight - animItemHeightTwo / animStartTwo;

			if (animItemHeightTwo > window.innerHeight) {
				animItemPointTwo = window.innerHeight - (window.innerHeight / animStartTwo);


			}

			if ((pageYOffset > animItemOffsetTwo - animItemPointTwo) && pageYOffset < (animItemOffsetTwo + animItemHeightTwo)) {
				animItemTwo.classList.add("active");

			}
			// else {
			// 	animItem.classList.remove("active");


			// }

		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft
		}
	}
	animOnSCroll__two();
}


const anchors = document.querySelectorAll('.menu__link[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
const arrows = document.querySelector('.arrows');

arrows.addEventListener('click', function (e) {
	e.preventDefault()
	console.log("asd");
	const next = document.querySelector('#info');
	next.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
})

// $(document).ready(function () {
// 	$('a.menu__link').click(function () {
// 		$('html, body').animate({
// 			scrollTop: $($(this).attr("href")).offset().top + "px"
// 		}, {
// 			duration: 1000,
// 			easing: "swing"

// 		});
// 		return false;
// 	});
// });
let acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

let items = document.querySelectorAll('.item-cours>.item__body');

// function getRandomColor() {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

// for (let i = 0; i < items.length; i++) {
// 	console.log(items[i]);
// 	console.log(getRandomColor());
// 	items[i].style.backgroundColor = getRandomColor();
// }
;
// let prog = document.querySelector(".progressBar");

// window.addEventListener("scroll", myFunction);

// function myFunction() {
// 	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	let scrolled = (winScroll / height) * 100;
// 	console.log(scrolled);
// 	prog.style.width = scrolled + "%";

// } ;
$(document).ready(function ($) {

	$('.img__form').click(function () {

		$('.search__form, main, header, html').toggleClass("show");
		$(document).mouseup(function (e) { // событие клика по веб-документу
			let div = $(".search__form"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('main, .search__form, header, html').removeClass('show');

			}
		});

	})
	$('.close').click(function () {
		$('.search__form, main').removeClass("show");

	})
	$('.clear').click(function () {
		$('.search__form>div>span>input').val("");
	})
	$(".education__list").after().click(function () {
		console.log("asd")
		$(this).toggleClass("opnd_g");
	})
	if ($('.education__list').find('.education__li').length > 5) {
		console.log(">>");
		$('.education__list').after().click(function () {
			// $('.education__list .education__li(n+5)').slideToggle('');
			$('.education__list li:nth-child(n+7)').slideToggle('');

			


		});
	} else { $('.education__list').after().hide(); }
});;
;



function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

function range(){
	let range_slider = document.querySelector('.range__slider');
	let x = range_slider.value;
	let color = 'linear-gradient(90deg, rgb(15, 31, 179)' + x + '%, rgb(15, 168, 179)' + x + '%)';
	range_slider.style.background = color;

}
// range_slider.addEventListener('mousemove', function () {
// 	console.log("asd");
// 	let x = range_slider.value;
// 	let color = 'linear-gradient(90deg, rgb(15, 31, 179)' + x + '%, rgb(15, 168, 179)' + x + '%)';
// 	range_slider.style.background = color;
// });



AOS.init();

let image__video = document.querySelector('.image__video');
let circle = document.querySelector('.image__video>.circle');
let video = document.querySelector('.video');

image__video.addEventListener('click', function () {
	video.classList.toggle('played');
	circle.classList.toggle('played');
	if (video.classList.contains("played")) {
		video.play();
	}
	else {
		video.pause();
	}
});

