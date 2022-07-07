var slideshow = document.getElementById("slideshow");
var slides = slideshow.getElementsByTagName("img");
var index = 0;

var nextSlide = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

var prevSlide = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

var slideshowText = document.getElementById("slideshowText");
var slidesText = slideshowText.getElementsByTagName("div");
var i = 0;

var nextSlideText = () => {
  slidesText[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slidesText[i].classList.add("active");
};

var prevSlideText = () => {
  slidesText[i].classList.remove("active");
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add("active");
};

var menuToggle = () => {
  var nav = document.getElementById("navbar");
  nav.classList.toggle("active");
};
