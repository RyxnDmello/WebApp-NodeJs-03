const carousel = document.querySelector(".comment-carousel");
const slides = document.querySelectorAll(".comment-slide");

const up = document.querySelector(".comments-controller.up");
const down = document.querySelector(".comments-controller.down");

let currentSlide = 0;

export default function CommentsSlideshow() {
  ScrollUp();
  ScrollDown();
}

function ScrollUp() {
  up.addEventListener("click", () => {
    if (currentSlide === 0) return;
    --currentSlide;

    alert(currentSlide);

    ChangeSlides();
  });
}

function ScrollDown() {
  down.addEventListener("click", () => {
    if (currentSlide === slides.length - 1) return;
    ++currentSlide;

    alert(currentSlide);

    ChangeSlides();
  });
}

function ChangeSlides() {
  SlidesAnimation(0);

  setTimeout(() => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${
        -currentSlide * carousel.clientWidth
      }px)`;
    });
  }, 400);

  SlidesAnimation(800);
}

function SlidesAnimation(timeoutDuration) {
  setTimeout(() => {
    slides.forEach((slide) => {
      if (slide.classList.contains("comment-hide")) {
        slide.classList.remove("comment-hide");
        slide.classList.add("comment-reveal");
      } else {
        slide.classList.remove("comment-reveal");
        slide.classList.add("comment-hide");
      }
    });
  }, timeoutDuration);
}
