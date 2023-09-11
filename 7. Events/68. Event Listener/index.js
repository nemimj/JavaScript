// inclick event
{
  /* <button onClick="click"></button>; */
}

const btn = document.querySelector(".btn");

const click = () => {
  alert("you clicked the button");
};

// adding function at the same time
addEventListener("click", () => {});

// adding functions at the different time
addEventListener("click", clicked);

// clicking the button by automatic

setTimeout(() => {
  btn.click();
}, 5000);

// removing the event listener

btn.removeEventListener("click", clicked);

const clicked = () => {
  alert("hello");
};
