import Data from "./FeaturesData.js";

const options = document.querySelectorAll(".features-option-image");
const points = document.querySelectorAll(".features-point");

const titles = document.querySelectorAll(".features-point-title");
const descriptions = document.querySelectorAll(".features-point-description");

export default function FeaturesMenu() {
  options.forEach((option, optionIndex) => {
    option.addEventListener("click", () => {
      ChangeData(optionIndex);
    });
  });
}

function ChangeData(optionIndex) {
  OptionAnimation(optionIndex);

  PointRevealAnimation(0);

  titles.forEach((title, index) => {
    title.textContent = Data.options[optionIndex][index].title;
  });

  descriptions.forEach((description, index) => {
    description.textContent = Data.options[optionIndex][index].description;
  });

  PointRevealAnimation(500);
}

function OptionAnimation(optionIndex) {
  options.forEach((option, index) => {
    if (index !== optionIndex) {
      option.style.opacity = 0.25;
    } else {
      option.style.opacity = 1;
    }
  });
}

function PointRevealAnimation(revealDuration) {
  setTimeout(() => {
    points.forEach((point) => {
      if (point.classList.contains("feature-hide")) {
        point.classList.remove("feature-hide");
        point.classList.add("feature-reveal");
      } else {
        point.classList.remove("feature-reveal");
        point.classList.add("feature-hide");
      }
    });
  }, revealDuration);
}
