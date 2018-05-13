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
