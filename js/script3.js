// yfu and viewfinders page
let tobiasBtn = document.querySelector(".tobias-btn");
    let mariaBtn = document.querySelector(".maria-btn");

    let tobiasPers = document.querySelector(".tobias-persona");
    let mariaPers = document.querySelector(".maria-persona");

    tobiasBtn.addEventListener("click", ()=>{
        tobiasPers.classList.remove("gone");
        mariaPers.classList.add("gone");
    })
    mariaBtn.addEventListener("click", ()=>{
        tobiasPers.classList.add("gone");
        mariaPers.classList.remove("gone");
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
