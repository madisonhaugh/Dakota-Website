let slideIndex = 1;
let imageIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("progressContentSlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showImages() {
  let i;
  let slides = document.getElementsByClassName("progressImgSlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  imageIndex++;
  if (imageIndex > slides.length) {imageIndex = 1}
  slides[imageIndex-1].style.display = "block";
  setTimeout(showImages, 10000); // Change image every 10 seconds
}