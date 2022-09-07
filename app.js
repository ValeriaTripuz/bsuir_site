const slider = document.querySelectorAll(".el"),
  dot = document.querySelectorAll(".dot");

let counter = 1;
slidefunc(counter);

let timer = setInterval(autoslide, 2000);
function autoslide() {
  counter += 1;
  slidefunc(counter);
}

function plusSlides(n) {
  counter += 1;
  slidefunc(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  slidefunc(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefunc(n) {
  let i;
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }

  // if we slide back
  if (n > slider.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = slider.length;
  }

  slider[counter - 1].style.display = "block";
  dot[counter - 1].classList.add("active");
}

// //  zav kaf

// const img = document.querySelector(".main-person-picture");
// const div1 = document.querySelector(".main-person-info");
// const div2 = document.querySelector(".main-person-dop-info");
// // console.log(div1);

// img.addEventListener("click", function () {
//   if (div1.classList.contains("hide") && div2.classList.contains("hide")) {
//     console.log(" its ok");
//     div1.style.display = "block";
//     div1.classList.remove("hide");
//     div2.style.display = "block";
//     div2.classList.remove("hide");
//   } else {
//     div1.style.display = "none";
//     div2.style.display = "none";
//     div1.classList.add("hide");
//     div2.classList.add("hide");
//     console.log("removing hide");
//   }
// });
