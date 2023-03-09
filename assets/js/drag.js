// getting HTML elements






const nav = document.querySelector(".sidenav"),
      toggleBtn = nav.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
  });

// js code to make draggable nav
function onDrag({movementY}) { //movementY gets mouse vertical value
  const navStyle = window.getComputedStyle(nav), //getting all css style of nav
        navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
        navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
        windHeight = window.innerHeight; // getting window height

  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  if(navTop > windHeight - navHeight){
    nav.style.top = `${windHeight - navHeight}px`;
  }
}

//this function will call when user click mouse's button and  move mouse on nav
nav.addEventListener("mousedown", () =>{
  nav.addEventListener("mousemove", onDrag);
});

//these function will call when user relase mouse button and leave mouse from nav
nav.addEventListener("mouseup", () =>{
  nav.removeEventListener("mousemove", onDrag);
});
nav.addEventListener("mouseleave", () =>{
  nav.removeEventListener("mousemove", onDrag);
});


// sliderrrrrrrrrrrrrrrrrrrrrr

var slide = document.querySelectorAll('.slide');
var btn = document.querySelectorAll('.btn');
let currentSlide = 1;
var manualNav = function(manual){
    slide.forEach((slide)=>{
        slide.classList.remove('active')
    })
    btn.forEach((btn)=>{
        btn.classList.remove('active')
    })



    slide[manual].classList.add('active');
    btn[manual].classList.add('active');
};

btn.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide=i;
    
    })
})


var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
       
        setTimeout(function(){

            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active')
            })

            slide[i].classList.add('active');
            btn[i].classList.add('active');
            i++

        if(slide.length == i){
            i=0
        }
        if (i >= slide.length){
            return;
        }
        repeater();
        },10000);
    }
    repeater();
}
repeat();

