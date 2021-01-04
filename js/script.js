;
;
;
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
;
;
;
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

