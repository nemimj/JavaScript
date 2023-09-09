// Qucik and Dry

function createListItem(item) {
  const li = `<li>${item}</li>`; // *this will not work because it acts has string in order work we need to create a element

  const list = document.createElement("li");

  list.innerHTML = `apples <button>x</button>`;

  document.querySelector(".items").appendChild(list);
}

// clean & performat

function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);

  li.appendChild(button);
}
