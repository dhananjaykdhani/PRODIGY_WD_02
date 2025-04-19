// script.js

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const lapList = document.getElementById("lapList");

document.getElementById("startBtn").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(runStopwatch, 10);
  }
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  lapList.innerHTML = "";
});

document.getElementById("lapBtn").addEventListener("click", () => {
  const lapTime = `${format(minutes)}:${format(seconds)}:${format(milliseconds)}`;
  const li = document.createElement("li");
  li.textContent = lapTime;
  lapList.appendChild(li);
});

function runStopwatch() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function updateDisplay() {
  minutesEl.textContent = format(minutes);
  secondsEl.textContent = format(seconds);
  millisecondsEl.textContent = format(milliseconds);
}

function format(num) {
  return num < 10 ? `0${num}` : num;
}
