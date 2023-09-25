let start = document.querySelector(".btn-start");
let stop = document.querySelector(".stop");

start.addEventListener("click", bgStart);
stop.addEventListener("click", bgStop);

let timer;

function bgChange() {
  // hexa decimal value
  let hex = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = `#${hex}`;
}

function bgStart() {
  if (!timer) timer = setInterval(bgChange, 500);
}

function bgStop() {
  clearTimeout(timer);
}
