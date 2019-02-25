// svg4everybody();

// fullscreen
var fullmenu = document.querySelector('.fullscreen');
var burger = document.querySelector('.burger');
var menuList = document.querySelector('.fullscreen .menu__list');


burger.addEventListener('click' , showFullmenu);

function showFullmenu() {
	fullmenu.classList.toggle('is-active');
	document.body.classList.toggle('overflow');
	menuList.classList.toggle('animate');
	burger.classList.toggle('lines');
}


menuList.addEventListener('click', e=>{
	if(e.target.classList.contains('menu__link')){
		showFullmenu();
		menuList.classList.remove('animate');
	}
});




