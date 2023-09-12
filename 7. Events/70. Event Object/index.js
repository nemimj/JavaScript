const h1 = document.querySelector("h1");
const btn = document.querySelector(".btn");
h1.addEventListener("click", (e) => {
  console.log(e.target); // the element we clicked
  console.log(e.currentTarget); // the element we attached to
});

btn.addEventListener("drag", (e) => {
  btn.innerText = `X:${e.clientX} Y:${e.clientY}`;
});

// e.preventDefault() method prevents the default behavior
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link was clicked");
});

/*
  - `target` - The element that triggered the event
  - `currentTarget` - The element that the event listener is attached to (These are the same in this case
  - `type` - The type of event that was triggered
  - `timeStamp` - The time that the event was triggered
  - `clientX` - The x position of the mouse click relative to the window
  - `clientY` - The y position of the mouse click relative to the window
  - `offsetX` - The x position of the mouse click relative to the element
  - `offsetY` - The y position of the mouse click relative to the element
  - `pageX` - The x position of the mouse click relative to the page
  - `pageY` - The y position of the mouse click relative to the page
  - `screenX` - The x position of the mouse click relative to the screen
  - `screenY` - The y position of the mouse click relative to the screen
  */
