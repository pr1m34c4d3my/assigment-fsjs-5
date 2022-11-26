let cursor = document.querySelector(".cursor");
let cursorScale = document.querySelectorAll(".cursor-scale");
let cursorChange = document.querySelectorAll(".cursor-change");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
  });
});

cursorChange.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("change");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("change");
  });
});

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

setInterval(() => {
  document
    .querySelectorAll(".carousel-slide img")
    [counter].classList.add("active");
  document
    .querySelectorAll(".carousel-slide img")
    [counter - 1].classList.remove("active");
  counter++;
  if (counter === carouselImages.length) {
    counter = 1;
  }
}, 3000);

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  setTimeout, 100;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
