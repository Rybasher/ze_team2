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

let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
let girl = document.querySelector('.girl1');
// girl.style.objectFit = 'contain';
console.log(height);

if (height < 800 && width < 1200) {
	// girl.style.objectFit = 'contain';
	console.log("little")
	// document.body.style.background = "#f3f3f3";

}
