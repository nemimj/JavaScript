const btn = document.querySelectorAll(".btn")[1];
const show = document.querySelector(".show");

show.style.display = "none";

btn.addEventListener("click", () => {
  show.style.display = "block";
});

show.classList.add("bg-dark");
btn.classList.remove("bg-light");
btn.classList.toggle("dark");
btn.classList.replace("card", "dark");
