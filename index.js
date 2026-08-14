const textArea = document.getElementById("noteInput");
const timeInput = document.getElementById("inputTime");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const copyBtn = document.getElementById("copyBtn");
const timerdiv = document.getElementById("timediv");

let a;
let i;
let timeOut = timeInput.value * 1000;
let remaingTime = parseInt(timeInput.value);


stopBtn.addEventListener("click", () => {
  stopTimer();
});

copyBtn.addEventListener("click", () => {
  let textAreaText = textArea.value;
  navigator.clipboard.writeText(textAreaText);
  alert("Text Copied");
});

startBtn.addEventListener("click", () => {
  initialFun();
  alert(`${timeInput.value}`);
});

textArea.addEventListener("keydown", () => {
  remaingTime = parseInt(timeInput.value);
  timerdiv.innerText = remaingTime;
});

textArea.addEventListener("keyup", (event) => {
  clearTimeout(a);
  clearInterval(i);
  remaingTime = parseInt(timeInput.value);
  tt();
  a = setTimeout(userStopped, timeOut);
});

const stopTimer = () => {
  clearTimeout(a);
  clearInterval(i);
  alert("Timer stopped");
};

const userStopped = () => {
  textArea.value = "";
  clearInterval(i);
  remaingTime = parseInt(timeInput.value);
  timerdiv.innerText = remaingTime;
};

const tt = () => {
  remaingTime--;
  timerdiv.innerText = timeInput.value;
  i = setInterval(() => {
    timerdiv.innerText = remaingTime;
    remaingTime--;
  }, 1000);
};

const initialFun = () => {
  timeOut = timeInput.value * 1000;
  remaingTime = parseInt(timeInput.value);
  timerdiv.innerText = timeInput.value;
  timerfunction();
};

initialFun();
