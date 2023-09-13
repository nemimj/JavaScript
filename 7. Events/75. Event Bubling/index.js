const container = document.querySelector(".container");
const box = document.querySelector(".box");
const button = document.querySelectorAll("button")[1];

button.addEventListener("click", (e) => {
  alert("you clicked button");
  e.stopPropagation();
});

box.addEventListener("click", () => {
  alert("you clicked box");
});

container.addEventListener("click", () => {
  alert("you clicked container");
});
