const percentage = document.querySelectorAll(".type-progress-percentage");
const bars = document.querySelectorAll(".type-progress-fill");

export default function ProgressBar() {
  SetProgressBar();
}

function SetProgressBar() {
  bars.forEach((bar, index) => {
    bar.style.width = `${percentage[index].textContent}`;
  });
}
