apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=5")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (data) => {
  data.forEach((element) => addTodoDom(element));
};

const addTodoDom = (element) => {
  let li = document.createElement("li");
  let todoList = document.querySelector(".todo-list");
  let textNode = document.createTextNode(element.title);
  li.appendChild(textNode);
  li.setAttribute("data-id", element.id); //* to add custome attribute we should use data -
  if (element.completed) li.classList.add("done");

  todoList.appendChild(li);
};

getTodos();
