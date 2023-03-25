const rightController = document.querySelector(".template-controller.right");
const leftController = document.querySelector(".template-controller.left");

const indicators = document.querySelectorAll(".template-indicator");
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

    ControllerAnimations();
    IndicatorAnimations();
  });
}

function SlideLeft() {
  leftController.addEventListener("click", () => {
    if (currentSlide === 0) return;

    --currentSlide;

    slides.forEach((slide) => {
      slide.style.translate = `${-currentSlide * slide.clientWidth}px 0px`;
    });

    ControllerAnimations();
    IndicatorAnimations();
  });
}

function ControllerAnimations() {
  if (currentSlide === 0) {
    leftController.style.opacity = 0.25;
    return;
  }

  if (currentSlide === slides.length - 1) {
    rightController.style.opacity = 0.25;
    return;
  }

  rightController.style.opacity = 1;
  leftController.style.opacity = 1;
}

function IndicatorAnimations() {
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.style.opacity = 1;
      indicator.style.scale = 1.25;
    } else {
      indicator.style.opacity = 0.25;
      indicator.style.scale = 1;
    }
  });
}
