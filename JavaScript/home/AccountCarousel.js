const carousel = document.querySelector(".account-carousel");
const slides = document.querySelectorAll(".account-slide");
const next = document.querySelectorAll(".form-switch-button");

let currentSlide = 0;

export default function AccountCarousel() {
  MoveSlide();
}

function MoveSlide() {
  next.forEach((next) => {
    next.addEventListener("click", () => {
      if (currentSlide === 0) ++currentSlide;
      else currentSlide = 0;

      slides.forEach((slide) => {
        slide.style.translate = `${-carousel.clientWidth * currentSlide}px 0`;
      });
    });
  });
}
