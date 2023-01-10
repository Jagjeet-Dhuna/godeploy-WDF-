const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//--------------------------------------------------------------------------------------//

let btn1 = document.querySelector(".go-deploy");
let div1 = document.querySelector(".gd-job-disc");
let img1 = document.querySelector(".gd-img");

let btn2 = document.querySelector(".harbizinc");
let div2 = document.querySelector(".hi-job-disc");
let img2 = document.querySelector(".hi-img");

let btn3 = document.querySelector(".mcdonalds");
let div3 = document.querySelector(".md-job-disc");
let img3 = document.querySelector(".md-img");

btn1.addEventListener("click", () => {
    if (div1.style.display = "none", img1.style.display = "none") {
        div1.style.display = "block", img1.style.display = "block", div2.style.display = "none", img2.style.display = "none", div3.style.display = "none", img3.style.display = "none";
    }
});

btn2.addEventListener("click", () => {

   if (div2.style.display = "none", img2.style.display = "none") {
      div2.style.display = "block", img2.style.display = "block", div1.style.display = "none", img1.style.display = "none", div3.style.display = "none", img3.style.display = "none";
    }
});

btn2.addEventListener("click", () => {

    if (div2.style.display = "none", img2.style.display = "none") {
       div2.style.display = "block", img2.style.display = "block", div1.style.display = "none", img1.style.display = "none", div3.style.display = "none", img3.style.display = "none";
     }
 });

 btn3.addEventListener("click", () => {

    if (div3.style.display = "none", img3.style.display = "none") {
       div3.style.display = "block", img3.style.display = "block", div1.style.display = "none", img1.style.display = "none", div2.style.display = "none", img2.style.display = "none";
     }
 });
