const containers = document.querySelectorAll(".share-container");
const carousel = document.querySelector(".share-carousel");
const next = document.querySelector(".share-next");

const indicators = document.querySelectorAll(".share-indicator");

let currentContainer = 0;

export default function ShareCarousel() {
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
      if (container.classList.contains("share-hide")) {
        container.classList.remove("share-hide");
        container.classList.add("share-reveal");
      } else {
        container.classList.remove("share-reveal");
        container.classList.add("share-hide");
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
