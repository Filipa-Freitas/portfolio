// let i = 1;
// let mouseWheel = true;

// function MouseWheelHandler(e) {
// 	e.preventDefault();
// 	if (!mouseWheel) {
// 		return false;
// 	}
// 	mouseWheel = false;
// 	setTimeout(function () {
// 		mouseWheel = true;
// 	}, 3000); // Stop mouse wheel event for 3 seconds
// 	e = window.event || e;
// 	var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
// 	var h = window.innerHeight;
// 	var section = document.getElementsByTagName('section');
// 	if (i <= section.length && i >= 0) {
// 		//scrolling down?
// 		if (delta < 0) {
// 			window.scrollTo({
// 				top: h * i,
// 				behavior: 'smooth',
// 			});
// 			i++;
// 		} else {
// 			//scrolling up?
// 			window.scrollTo({
// 				top: h * i,
// 				behavior: 'smooth',
// 			});
// 			i--;
// 		}
// 	} else {
// 		i = 1;
// 		window.scrollTo({
// 			top: 0,
// 			behavior: 'smooth',
// 		});
// 	}
// }
// window.addEventListener('mousewheel', MouseWheelHandler, false);
import fullpage from 'fullpage.js';

window.addEventListener('DOMContentLoaded', (e) => {
	// SmoothScroll
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();

			const { target } = e;
			const id = target.getAttribute('href').split('#')[1];
			console.log(id, target);
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest',
			});
		});
	});
	// Fullpage.js
	new fullpage('#space-container', {
		autoScrolling: true,
		scrollHorizontally: false,
	});
	fullpage_api.setAllowScrolling(false);
});

// const sections = document.getElementsByTagName('section');
// console.log(sections);

// const isInViewPort = (section) => {
// 	let bounding = section.getBoundingClientRec();
// 	if (
// 		bounding.top >= 0 &&
// 		bounding.left >= 0 &&
// 		bounding.right <=
// 			(window.innerWidth || document.documentElement.clientWidth) &&
// 		bounding.bottom <=
// 			(window.innerHeight || document.documentElement.clientHeight)
// 	) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// for (let section in sections) {
// 	isInViewPort(section);
// }
