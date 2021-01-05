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