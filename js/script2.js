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
