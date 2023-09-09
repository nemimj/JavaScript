function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replace first";

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Seond </li>";
}

function replaceAll() {
  const items = document.querySelector(".items");
  const itemArr = Array.from(items);
  const li = document.createElement("li");

  itemArr.forEach((ele, index) => {
    // // ele.outerHTML = `<li>${index}</li> `;
    // ele.innerHTML = `<li>${index}</li> `;
    ele.innerHTML = index === 1 ? `<li>${index}</li>` : "<li>Item</li>";
  });
}

function replaceChildHeading() {
  const parent = document.querySelector(".parent");
  const child = document.querySelector(".parent h1");
  const replace = document.createElement("h2");
  h2.textContent = "Replaced me";
  parent.replaceChild(replace, child);
}

replaceFirstItem();
replaceSecondItem();
