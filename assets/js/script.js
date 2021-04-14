/***********************
 * Viewport height on mobile
 ***********************/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

/***********************
 * Scroll down
 ***********************/
function scrollDown() {
  const windowCoords = document.documentElement.clientHeight;
  (function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords);
    }
  })();
}

document.getElementById("main").addEventListener("wheel", (event) => {
  const delta = Math.sign(event.deltaY);
  if (delta > 0) {
    scrollDown();
  }
});

/***********************
 * Slider
 ***********************/
var slideIndex = 0;
slider(slideIndex); //slider
showSlides(); // auto player

function slider(n) {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  var i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// previous and next
function plusSlides(n) {
  slider((slideIndex += n));
}

// dot current
function currentSlide(n) {
  slider((slideIndex = n));
}

// auto player
function showSlides() {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}
