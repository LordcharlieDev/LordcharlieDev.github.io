class Slider {
	constructor(args) {
		this.viewport = document.querySelector("." + args.viewport);
		this.container = document.querySelector("." + args.container);
		this.slides = document.querySelectorAll("." + args.slideItem);

		this.index = 1;
		this.Init ();
	}

	Init () {
		var last = this.slides[this.slides.length - 1].cloneNode(true);
		var first = this.slides[0].cloneNode(true);

		last.classList.add(".last-clone");
		first.classList.add(".first-clone");

		this.container.prepend(last);
		this.container.append(first);

		this.TeleportTo(this.index);
	}

	SwipeTo(index) {
		this.container.style.transition = "all 1.0s";
		this.container.style.transform = "translateX(" + (-100 * (index)) + "%)";
	}

	TeleportTo(index) {
		this.container.style.transition = "none";
		this.container.style.transform = "translateX(" + (-100 * (index)) + "%)";
	}

	next () {
		var slides = this.slides;
		var index = this.index;
		this.index++;
		index++;
		this.SwipeTo(index);
		this.container.addEventListener("transitionend", function () {
			if (index == slides.length + 1)
			{
				aqslider.TeleportTo(1);
				aqslider.index = 1;
				index = 1;
			}
		});
	}

	prev () {
		var slides = this.slides;
		var index = this.index;
		this.index--;
		index--;
		this.SwipeTo(index);
		this.container.addEventListener("transitionend", function () {
			if (index == 0)
			{
				aqslider.TeleportTo(slides.length);
				aqslider.index = slides.length;
				index = slides.length;
			}
		});
	}
}
