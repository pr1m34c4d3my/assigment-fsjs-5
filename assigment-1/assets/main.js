const menuBtn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
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

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
