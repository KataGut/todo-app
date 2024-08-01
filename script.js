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

const todoInputEl = document.getElementById("todo-input");
const todoAddBtn = document.getElementById("add-todo-btn");

function renderTodoItemFromInputValue() {
  const valueInput = {
    // obtener valor del input
    name: todoInputEl.value,
  };
  // llamar a la función renderTodoItem con ese valor
  renderTodoItem(valueInput);
  // limpiar valor del input
  todoInputEl.value = "";
}

todoInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    renderTodoItemFromInputValue();
  }
});

todoAddBtn.addEventListener("click", function () {
  renderTodoItemFromInputValue();
});

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
