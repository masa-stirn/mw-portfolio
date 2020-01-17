// yfu and viewfinders page
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

// footer date
var d = new Date();
document.getElementById("demo").innerHTML = " Designing with love @ Seattle, USA " + d.getFullYear();


