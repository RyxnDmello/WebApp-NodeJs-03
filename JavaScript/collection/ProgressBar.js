const percentages = document.querySelectorAll(".type-progress-percentage");
const bars = document.querySelectorAll(".type-progress-fill");

export default function ProgressBar() {
  SetProgressBar();
  SetPercentage();
}

function SetProgressBar() {
  bars.forEach((bar, index) => {
    bar.style.width = `${percentages[index].textContent}`;
  });
}

function SetPercentage() {
  percentages.forEach((percentage) => {
    percentage.textContent = `${percentage.textContent} Completed`;
  });
}
