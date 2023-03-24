const rightController = document.querySelector(".template-controller.right");
const leftController = document.querySelector(".template-controller.left");

const slides = document.querySelectorAll(".template-slide");

let currentSlide = 0;

export default function TemplateCarousel() {
  SlideRight();
  SlideLeft();
}

function SlideRight() {
  rightController.addEventListener("click", () => {
    if (currentSlide === slides.length - 1) return;

    ++currentSlide;

    slides.forEach((slide) => {
      slide.style.translate = `${-currentSlide * slide.clientWidth}px 0px`;
    });
  });
}

function SlideLeft() {
  leftController.addEventListener("click", () => {
    if (currentSlide === 0) return;

    --currentSlide;

    slides.forEach((slide) => {
      slide.style.translate = `${-currentSlide * slide.clientWidth}px 0px`;
    });
  });
}
