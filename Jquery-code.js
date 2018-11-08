var isMobile = false;
$(document).ready(function () {
	if ($('body').width() <= 768) {
		isMobile = true;
	}
	if (isMobile) {
		
	}
	if (!isMobile) {
	}

	$('#slider-container').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 3,
		autoplayHoverPause: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		navText: ["<img src=\"images/prev.png\">", "<img src=\"images/prev.png\">"],
		center: true,
		responsive: {
			0: {
				items: 1
			},
			700: {
				items: 3
			},
			992: {
				items: 3
			}
		}
	});

	var head = document.head;
   var link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '{{ css_file }}';
    head.appendChild(link);
});

