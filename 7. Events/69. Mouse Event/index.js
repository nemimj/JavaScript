const heading = document.querySelector("h1");

let doubleClick = () => {
  if (document.body.style.backgroundColor !== "lightgreen") {
    document.body.style.backgroundColor = "lightgreen";
  } else {
    document.body.style.backgroundColor = "white";
  }
};

let rightClick = () => {
  alert("right click");
};

// events are always in lowercase only

heading.addEventListener("dblclick", doubleClick);
heading.addEventListener("contextmenu", rightClick);
heading.addEventListener("mousedown", rightClick);
heading.addEventListener("mouseup", rightClick);
heading.addEventListener("wheel", rightClick);
heading.addEventListener("mouseover", rightClick);
heading.addEventListener("mouseout", rightClick);
heading.addEventListener("drag", rightClick);
heading.addEventListener("dragstart", rightClick);
heading.addEventListener("dragend", rightClick);
