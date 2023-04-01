const carousel = document.querySelector(".comment-carousel");
const slides = document.querySelectorAll(".comment-slide");

const up = document.querySelector(".comments-controller.up");
const down = document.querySelector(".comments-controller.down");
const indicators = document.querySelectorAll(".comments-indicator");

let currentSlide = 0;

export default function CommentsSlideshow() {
  ScrollUp();
  ScrollDown();
}

function ScrollUp() {
  up.addEventListener("click", () => {
    if (currentSlide === 0) return;
    --currentSlide;

    ChangeSlides();
    ControllerAnimation();
    IndicatorAnimation();
  });
}

function ScrollDown() {
  down.addEventListener("click", () => {
    if (currentSlide === slides.length - 1) return;
    ++currentSlide;

    ChangeSlides();
    ControllerAnimation();
    IndicatorAnimation();
  });
}

function ChangeSlides() {
  ScrollAnimation(0);

  setTimeout(() => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${
        -currentSlide * carousel.clientWidth
      }px)`;
    });
  }, 400);

  ScrollAnimation(800);
}

function ScrollAnimation(timeoutDuration) {
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

function ControllerAnimation() {
  if (currentSlide === 0) {
    up.style.opacity = "0.25";
    down.style.opacity = "1";
    return;
  }

  if (currentSlide === slides.length - 1) {
    up.style.opacity = "1";
    down.style.opacity = "0.25";
    return;
  }

  up.style.opacity = "1";
  down.style.opacity = "1";
}

function IndicatorAnimation() {
  indicators.forEach((indicator, index) => {
    if (currentSlide === index) {
      indicator.style.opacity = "1";
      indicator.style.scale = "1.2";
    } else {
      indicator.style.opacity = "0.25";
      indicator.style.scale = "1";
    }
  });
}
