let output;
const parent = document.querySelector(".parent");

// child nodes are different from children element

// chlidNodes consists of all the nodes that are inside parent , comments and whitespaces are also nodes
output = parent.childNodes;
console.log(output);

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;

output = parent.firstChild;
console.log(output);

// Parent Node

const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;

// child

const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
