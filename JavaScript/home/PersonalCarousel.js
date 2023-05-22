const containers = document.querySelectorAll(".personal-container");
const carousel = document.querySelector(".personal-carousel");
const next = document.querySelector(".personal-next");

const indicators = document.querySelectorAll(".personal-indicator");

let currentContainer = 0;

export default function PersonalCarousel() {
  next.addEventListener("click", () => {
    SwitchDirection();
    SwitchContainers();
    IndicatorAnimation();
  });
}

function SwitchDirection() {
  if (currentContainer === 1) {
    currentContainer = 0;
    return;
  }

  currentContainer = 1;
}

function SwitchContainers() {
  MovementAnimation(0);

  setTimeout(() => {
    containers.forEach((container) => {
      container.style.transform = `translateX(${
        -currentContainer * carousel.clientWidth
      }px)`;
    });
  }, 400);

  MovementAnimation(700);
}

function MovementAnimation(timeoutDuration) {
  setTimeout(() => {
    containers.forEach((container) => {
      if (container.classList.contains("personal-hide")) {
        container.classList.remove("personal-hide");
        container.classList.add("personal-reveal");
      } else {
        container.classList.remove("personal-reveal");
        container.classList.add("personal-hide");
      }
    });
  }, timeoutDuration);
}

function IndicatorAnimation() {
  indicators.forEach((indicator, index) => {
    console.log("HELLO");
    if (index === currentContainer) {
      indicator.style.opacity = "1";
      indicator.style.scale = "1.4";
    } else {
      indicator.style.opacity = "0.25";
      indicator.style.scale = "1";
    }
  });
}
