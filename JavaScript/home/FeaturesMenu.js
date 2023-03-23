import FeaturesData from "./FeaturesData.js";

const options = document.querySelectorAll(".features-option-image");
const titles = document.querySelectorAll(".features-point-title");

export default function FeaturesMenu() {
  options.forEach((option, optionIndex) => {
    option.addEventListener("click", () => {
      titles.forEach((title, titleIndex) => {
        title.textContent = FeaturesData.options[optionIndex][titleIndex].title;
      });
    });
  });
}
