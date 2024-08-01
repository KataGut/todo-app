const todos = [
  {
    name: "Barrer",
    completed: true,
  },
  {
    name: "Sacar al perro",
    completed: false,
  },
];

// function renderTodoItem (todo) {
//   const todoListEl = document.getElementById("todo-list");
//   const li = document.createElement("li");
//   li.innerText = todo.name;
//   todoListEl.appendChild(li);
// };
const renderTodoItem = (todo) => {
  const todoListEl = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.innerText = todo.name;
  todoListEl.appendChild(li);
  li.className +=
    "flex-grow text-white text-xl tracking-wide flex flex-row h-[70px] items-center";
};

todos.forEach(
  //
  (todo) => {
    renderTodoItem(todo);
  }
);
