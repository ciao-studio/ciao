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