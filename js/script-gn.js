// yfu and viewfinders page
let marcoBtn = document.querySelector(".marco-btn");
let aliceBtn = document.querySelector(".alice-btn");
let davideBtn = document.querySelector(".davide-btn");

let marcoPers = document.querySelector(".marco-persona");
let alicePers = document.querySelector(".alice-persona");
let davidePers = document.querySelector(".davide-persona");

let persona1txt = document.querySelector(".persona1");
let persona2txt = document.querySelector(".persona2");
let persona3txt = document.querySelector(".persona3");

    marcoBtn.addEventListener("click", ()=>{
        marcoPers.classList.remove("gone");
        alicePers.classList.add("gone");
        davidePers.classList.add("gone");
        persona1txt.classList.remove("gone");
        persona2txt.classList.add("gone");
        persona3txt.classList.add("gone");
    })
    aliceBtn.addEventListener("click", ()=>{
        marcoPers.classList.add("gone");
        alicePers.classList.remove("gone");
        davidePers.classList.add("gone");
        persona1txt.classList.add("gone");
        persona2txt.classList.remove("gone");
        persona3txt.classList.add("gone");
    })
    davideBtn.addEventListener("click", ()=>{
        davidePers.classList.remove("gone");
        alicePers.classList.add("gone");
        marcoPers.classList.add("gone");
        persona1txt.classList.add("gone");
        persona2txt.classList.add("gone");
        persona3txt.classList.remove("gone");
    })

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

// slideshow0
var slideIndex0 = 1;
showSlides0(slideIndex0);

function plusSlides0(n) {
  showSlides0(slideIndex0 += n);
}

function currentSlide0(n) {
  showSlides0(slideIndex0 = n);
}

function showSlides0(n) {
  var i;
  var slides0 = document.getElementsByClassName("mySlides0");
  if (n > slides0.length) {slideIndex0 = 1}
  if (n < 1) {slideIndex0 = slides0.length}
  for (i = 0; i < slides0.length; i++) {
      slides0[i].style.display = "none";
  }
  slides0[slideIndex0-1].style.display = "block";
}


// slideshow2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
}

// slideshow3
var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
};

// footer date
var d = new Date();
document.getElementById("demo").innerHTML = " Designing with love @ Seattle, USA " + d.getFullYear();

