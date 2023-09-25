function changeBg() {
  document.body.style = "background-color: red";
  document.body.style.color = " white";
}

a = setTimeout(changeBg, 3000);
console.log(a);

document.querySelector(".btn-time").addEventListener("click", () => {
  console.log(a);
  clearTimeout(a);
  console.log("time cleared");
});
