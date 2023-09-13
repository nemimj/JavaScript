const show = document.querySelector(".show");
const form = document.querySelector("form");
const input = document.querySelector("input");
const select = document.querySelector("select");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (select.value === "0" || input.value === "") alert("please enter data");
//   else show.textContent = input.value + " " + select.value;
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  // to get item we should have their name to be added
  const item = formData.get("input"); // this are the name of the input fields
  const select = formData.get("select");

  const items = formData.entries();
  for (let ele of items) {
    console.log(ele[1]);
  }
});
