apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=30")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

function displayTodo(data) {
  data.forEach((element) => {
    let li = document.createElement("li");
    let todoList = document.querySelector(".todo-list");
    li.textContent = element.title;
    if (element.completed) li.classList.add("done");

    todoList.appendChild(li);
  });
}

getTodos();
