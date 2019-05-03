// yfu and viewfinders page
let marcoBtn = document.querySelector(".marco-btn");
    let aliceBtn = document.querySelector(".alice-btn");
    let davideBtn = document.querySelector(".davide-btn");

    let marcoPers = document.querySelector(".marco-persona");
    let alicePers = document.querySelector(".alice-persona");
    let davidePers = document.querySelector(".davide-persona");

    marcoBtn.addEventListener("click", ()=>{
        marcoPers.classList.remove("gone");
        alicePers.classList.add("gone");
        davidePers.classList.add("gone");
    })
    aliceBtn.addEventListener("click", ()=>{
        marcoPers.classList.add("gone");
        alicePers.classList.remove("gone");
        davidePers.classList.add("gone");
    })
    davideBtn.addEventListener("click", ()=>{
        davidePers.classList.remove("gone");
        alicePers.classList.add("gone");
        marcoPers.classList.add("gone");
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

// footer date
var d = new Date();
document.getElementById("demo").innerHTML = " Designing with love @ Seattle, USA " + d.getFullYear();

