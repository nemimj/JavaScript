// insertAdjacentElement Example

function inserElement() {
  const parent = document.querySelector(".parent");
  const h1 = document.querySelector("h1");
  h1.textContent = "hello world";

  parent.insertAdjacentElement("beforebegin", h1);
}

// insertAdjacentText Example

function insertText() {
  const item = document.querySelector("li:first-child");

  item.insertAdjacentText("afterend", "hello world");
}
// insertAdjacentHTML Example

function inserthtml() {
  const parent = document.querySelector(".parent");

  parent.insertAdjacentHTML("beforebegin", "<h1>Hello world</h1>");
}

// insertBefore Example

function insertBeforeItems() {
  const parent = document.querySelector(".parent");
  const h1 = (document.createElement("h1").innerText = "hello world");
  const thirdItem = document.querySelector(".child:nth-child(3)");

  parent.insertBefore(h1, thirdItem); // insert the h1 before the third element
}

inserElement();
insertText();
inserthtml();
insertBeforeItems();
/*
<!-- Before begin -->
  <p>
<!-- After begin -->
    text
<!-- Before end -->
  </p>
<!-- After End -->
*/
