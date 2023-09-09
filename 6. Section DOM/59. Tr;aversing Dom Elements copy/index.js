const parent = document.querySelector(".parent");
parent.style.border = "2px solid";
parent.style.padding = "10px";

let output;
output = parent.children[1].innerText = "hello world";
output = parent.firstElementChild.innerText;
output = parent.lastElementChild.innerText;
console.log(output);

// get parent from child element

const child = document.querySelector(".child");
output = child.parentElement;
console.log(output);

// sibling Element
const siblingElement = document.querySelector(".child:nth-child(2)");
output = siblingElement.nextElementSibling.innerHTML;
console.log(output);
