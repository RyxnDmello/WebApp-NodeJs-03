const carousel = document.querySelector(".comment-carousel");
const slides = document.querySelectorAll(".comment-slide");

let currentSlide = 0;

export default function CommentsSlideshow() {
  ChangeSlides(5000);
}

function ChangeSlides(intervalDuration) {
  setInterval(() => {
    if (currentSlide === slides.length - 1) currentSlide = 0;
    else ++currentSlide;

    slides.forEach((slide) => {
      slide.style.translate = `${-currentSlide * carousel.clientWidth}px 0`;
    });
  }, intervalDuration);
}
