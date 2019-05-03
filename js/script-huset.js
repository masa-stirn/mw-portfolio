// huset page
let btn1 = document.querySelector(".btn1");
    let btn2 = document.querySelector(".btn2");
    let btn3 = document.querySelector(".btn3");
    let first = document.querySelector(".first");
    let second = document.querySelector(".second");
    let third = document.querySelector(".third");

    btn1.addEventListener("click", ()=>{
        first.classList.remove("gone");
        second.classList.add("gone");
        third.classList.add("gone");
    })
    btn2.addEventListener("click", ()=>{
        first.classList.add("gone");
        second.classList.remove("gone");
        third.classList.add("gone");
    })
    btn3.addEventListener("click", ()=>{
        first.classList.add("gone");
        second.classList.add("gone");
        third.classList.remove("gone");
    })

// slideshow1
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// slideshow2
var slideIndex = 1;
showSlides2(slideIndex);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  slides2[slideIndex-1].style.display = "block";
}

// show PPT animation
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.addEventListener("mouseover", ()=>{
        img1.classList.add("gone");
        img2.classList.remove("gone");
    })
img2.addEventListener("mouseout", ()=>{
        img1.classList.remove("gone");
        img2.classList.add("gone");
    });

// footer date
var d = new Date();
document.getElementById("demo").innerHTML = " Designing with love @ Seattle, USA " + d.getFullYear();

