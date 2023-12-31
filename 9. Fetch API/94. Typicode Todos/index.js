const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=10")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (data) => {
  data.forEach((element) => addTodoDom(element));
};

const addTodoDom = (element) => {
  let li = document.createElement("li");
  li.classList.add("todo-item");
  let todoList = document.querySelector(".todo-list");
  let textNode = document.createTextNode(element.title);
  li.appendChild(textNode);
  li.setAttribute("data-id", element.id); //* to add custome attribute we should use data -
  if (element.completed) li.classList.add("done");

  todoList.appendChild(li);
};

const createTodo = (e) => {
  e.preventDefault();
  //   console.log(e.target.firstElementChild.value); // *  console.log(e.target.elements[0].value);

  let newTodo = { title: e.target.firstElementChild.value, completed: false };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoDom(data))
    .catch((reject) => console.log(reject));
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo-item")) {
    let completed = e.target.classList.toggle("done");
  }

  updateTodo(e.target.dataset.id, completed);
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.completed));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo-item")) {
    let id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};
const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector(".todo-form").addEventListener("submit", createTodo);
  document
    .querySelector(".todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector(".todo-list").addEventListener("dblclick", deleteTodo);
};

init();
