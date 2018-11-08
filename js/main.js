var item = document.getElementsByClassName('item');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var playing = true;

next.onclick = function () {
	nextSlide();
}

next.onmouseover = function () {
	pauseSlide();
}

next.onmouseout = function () {
	playSlide();
}

prev.onclick = function () {
	prevSlide();
}

prev.onmouseover = function () {
	pauseSlide();
}

prev.onmouseout = function () {
	playSlide();
}

var i = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
	goToSlide(i + 1);
}

function prevSlide() {
	goToSlide(i - 1);
}

function goToSlide(n) {
	item[i].className = "item";
	i = (i + 1) % item.length;
	item[i].className = "item active";
}

function pauseSlide() {
	playing = false;
	clearInterval(slideInterval);
}

function playSlide() {
	playing = true;
	slideInterval = setInterval(nextSlide, 3000);
}

$(document).mouseup(function (e){ // событие клика по веб-документу 
	var x = document.getElementById('myTopnav');
	var icon_menu = document.getElementById("icon_menu");
	var overlay = document.getElementById("main-overlay");
	var div = $(".sub-menu"); // тут указываем ID элемента 
	if ($("body").width() <= 768) {
	if (!div.is(e.target) // если клик был не по нашему блоку 
	&& div.has(e.target).length === 0) { // и не по его дочерним элементам 
		if (x.classList.contains("open")) {
			x.classList.remove("open");
			icon_menu.style.display = "block";
			overlay.style.opacity = "0";
			overlay.style.zIndex = "-1";
		} 
	} 
}
	});

	function hideMenu() {
		var x = document.getElementById('myTopnav');
		var icon_menu = document.getElementById("icon_menu");
		var overlay = document.getElementById("main-overlay");
		x.classList.toggle("open");
	
		if ($("body").width() <= 768) {
			if (x.classList.contains("open")) {
				overlay.style.opacity = ".5";
				overlay.style.zIndex = "2";
				icon_menu.style.display = "none";
			} 
			else {
				overlay.style.opacity = "0";
				overlay.style.zIndex = "-1";
				icon_menu.style.display = "block";
			}
		}
	}

