// objects identification
let btnPrev = document.querySelector('#slider-prev')
let btnNext = document.querySelector('#slider-next')

let noSwipeTime = 5;

setInterval(() => noSwipeTime > 0 ? noSwipeTime-- : false, 1000);
setInterval(() => noSwipeTime == 0 ? aqslider.next() : false, 5000)

btnPrev.addEventListener('click', () => {
	aqslider.prev();
	noSwipeTime = 5;
})

btnNext.addEventListener('click', () => {
	noSwipeTime = 5;
	aqslider.next();
})
