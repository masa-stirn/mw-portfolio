$(document).ready(function(){
      if (document.body.clientWidth < 800) {
            $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
        } else {
            $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
        }
    });

/*slide show dots*/
    var slideIndex = 0; //First, set the slideIndex to 0. (First picture)
    var timer = null; //set timer to null
    showSlides(slideIndex); //Then call function showSlides(slideIndex); to display the first image.
    function currentSlide(n) { //on click fire function currentSlide(n)
        clearTimeout(timer); //clear timeout
        showSlides(slideIndex = n - 1); //call function showSides(SlideIndex =n-1);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 0
        } //If the slideIndex is higher than the number of elements (slides.length), the slideIndex is set to zero.
        if (n < 1) {
            slideIndex = slides.length
        } //If the slideIndex is less than 1 it is set to number of elements (slides.length).
        for (i = 0; i < slides.length; i++) { //for loop runs a code muktiple times
            slides[i].style.display = "none"; //display non all slides
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", ""); //replace class name active with ""
        }
        slides[slideIndex - 1].style.display = "block"; //displays (display="block") the element with the given slideIndex
        dots[slideIndex - 1].className += " active"; //add class active to the active dot (gray hilight)
    }
    //automatic slide show
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        timer = setTimeout(showSlides, 3500); // Change image every 3 seconds
    }

    //Logo name magic
    var text = document.querySelectorAll(".text");


    window.onscroll = function() {
        logoMagic()
    };

    function logoMagic() {
        if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 500) {
            text.forEach(e => {
                e.classList.add("hidden");
            })
        } else {
            text.forEach(e => {
                e.classList.remove("hidden");
            })
        }
    }

    // buger menu

    let burgerMenu = document.querySelector(".burger");
    let close = document.querySelectorAll(".close1");
    let mainNav = document.querySelector(".mainNav");

    burgerMenu.addEventListener("click", () => {
        mainNav.classList.add("slideMeRight");
    })

close.forEach(e => {
                e.addEventListener("click", () => {
        mainNav.classList.remove("slideMeRight");
    })
            })

// footer date
var d = new Date();
document.getElementById("footer-date").innerHTML = d.getFullYear() + " &copy" + " COPYRIGHT";

// highlight navigation item on page scroll

// Cache selectors
var lastId,
 topMenu = $(".navigation"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find(".tabs"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active-nav")
         .end().filter("[href=#"+id+"]").parent().addClass("active-nav");
   }
});


