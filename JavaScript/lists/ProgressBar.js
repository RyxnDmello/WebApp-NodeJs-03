const progressLength = document.querySelectorAll(".task.progress").length;
const completedLength = document.querySelectorAll(".task.completed").length;

const bar = document.querySelector(".todo-form-progress-bar-container");
const fill = document.querySelector(".todo-form-progress-bar-fill");

const barPercent = document.querySelector(".todo-form-progress-bar-percentage");
const barText = document.querySelector(".todo-form-progress-bar-text");

export default function ProgressBar() {
  setTimeout(() => {
    SetPercentage();
  }, 10);
}

function SetPercentage() {
  if (progressLength === 0 && completedLength === 0) {
    bar.style.display = "none";
    return;
  }

  bar.style.display = "grid";

  const totalLength = progressLength + completedLength;
  const percentage = Math.round((completedLength / totalLength) * 100);

  fill.style.width = `${percentage}%`;

  barPercent.textContent = `${percentage}% Completed`;
  barText.textContent = `${completedLength}/${totalLength} Tasks`;
}
