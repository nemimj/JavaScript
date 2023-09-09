const div = document.createElement("div");

div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "my element");

// div.innerText = "hello world";

const text = document.createTextNode("hello world");
div.appendChild(text);

document.body.appendChild(div);

// document.querySelector("ul").appendChild(div);
