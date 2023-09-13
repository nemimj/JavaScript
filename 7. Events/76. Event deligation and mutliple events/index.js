const li = document.querySelectorAll("li");
const ul = document.querySelector("ul");

// li.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

ul.addEventListener("click", (e) => {
  console.log(e.currentTarget); // will give the element we have add event listener

  if (e.target.tagName === "LI") e.target.remove();
});
