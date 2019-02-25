const list = document.querySelector('.slider__list');
const widhtContainer = document.querySelector('.slider').clientWidth;
const controls = document.querySelector('.slider__page');

var position = 0;

function calcWidht() {
	const itemsCount = list.children.length;
	const listWidth = itemsCount * widhtContainer;

	list.style.width = `${listWidth}px`;
}

function hadnlerClicker(e) {
	if(e.target.tagName === 'A'){
		slide(e.target);
	}
}

function slide(target) {
	var vector = target.dataset.vector;

	switch(vector){
		case 'prev':
			slideTo(vector);
			break;
		case 'next':
			slideTo(vector);
			break;
	}
}

function slideTo(vector) {
	var active = document.querySelector('.vision');

	if(vector ==='next'){
		var nextElement = active.nextElementSibling;
	}else{
		var prevElement = active.previousElementSibling;
	}


	if(nextElement){
		position -=widhtContainer;
		active.classList.remove('vision');
		nextElement.classList.add('vision');

		translate(position);
	}else if (prevElement){
		position += widhtContainer;
		active.classList.remove('vision');
		prevElement.classList.add('vision');

		translate(position);
	}
}

function translate(position) {
	list.style.transform = `translateX(${position}px)`;
}


window.addEventListener('load', calcWidht);
controls.addEventListener('click', hadnlerClicker);