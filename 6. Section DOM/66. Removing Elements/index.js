function removeElements() {
  const removeBtn = document.querySelector(".btn");
  removeBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}
