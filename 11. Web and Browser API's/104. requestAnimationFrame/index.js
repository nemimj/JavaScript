let img = document.querySelector("img");
let start;
let done = false;

function step(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (elapsed > 8000) {
    done = true;
  }

  if (done) {
    return;
  }

  img.style.transform = `translateX(${elapsed / 20}px) rotate(${
    elapsed / 20
  }deg)`;
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
