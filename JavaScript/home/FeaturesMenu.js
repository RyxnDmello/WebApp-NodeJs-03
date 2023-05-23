const options = document.querySelectorAll(".features-option");
const points = document.querySelectorAll(".features-point");

const titles = document.querySelectorAll(".features-point-title");
const descriptions = document.querySelectorAll(".features-point-description");

export default function FeaturesMenu() {
  options.forEach((option, optionIndex) => {
    option.addEventListener("click", () => {
      FeatureSelection(optionIndex);
    });
  });
}

function FeatureSelection(optionIndex) {
  OptionAnimation(optionIndex);
  PointAnimation(0);
  SwitchContent(optionIndex, 505);
  PointAnimation(510);
}

function SwitchContent(optionIndex, changeDuration) {
  setTimeout(() => {
    fetch("/home.json")
      .then((response) => response.json())
      .then((data) => {
        titles.forEach((title, index) => {
          title.textContent = data.features[optionIndex][index].title;
        });

        descriptions.forEach((description, index) => {
          description.textContent =
            data.features[optionIndex][index].description;
        });
      });
  }, changeDuration);
}

function OptionAnimation(optionIndex) {
  options.forEach((option, index) => {
    if (index !== optionIndex) {
      option.style.opacity = "0.2";
      option.style.translate = "0";
    } else {
      option.style.translate = "2.5rem 0";
      option.style.opacity = "1";
    }
  });
}

function PointAnimation(revealDuration) {
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
