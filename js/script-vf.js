//// yfu and viewfinders page
//let tobiasBtn = document.querySelector(".tobias-btn");
//    let mariaBtn = document.querySelector(".maria-btn");
//
//    let tobiasPers = document.querySelector(".tobias-persona");
//    let mariaPers = document.querySelector(".maria-persona");
//
//    tobiasBtn.addEventListener("click", ()=>{
//        tobiasPers.classList.remove("gone");
//        mariaPers.classList.add("gone");
//    })
//    mariaBtn.addEventListener("click", ()=>{
//        tobiasPers.classList.add("gone");
//        mariaPers.classList.remove("gone");
//    })

let tobiasBtn = document.querySelector(".tobias-btn");
let mariaBtn = document.querySelector(".maria-btn");
let tobiasPers = document.querySelectorAll(".tobias-persona");
let mariaPers = document.querySelectorAll(".maria-persona");

    tobiasBtn.addEventListener("click", ()=>{
        tobiasPers.forEach(function(changeme){
     changeme.classList.remove("gone");
     });
        mariaPers.forEach(function(changeme){
        changeme.classList.add("gone");
     });
    })

    mariaBtn.addEventListener("click", ()=>{
        mariaPers.forEach(function(changeme){
     changeme.classList.remove("gone");
     });
        tobiasPers.forEach(function(changeme){
        changeme.classList.add("gone");
     });
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


