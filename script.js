const initialTodos = [
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

const renderTodoItem = (todo) => {
  const todoListEl = document.getElementById("todo-list");
  const liEl = document.createElement("li");
  liEl.innerText = todo.name;
  liEl.className +=
    "flex-grow text-white text-xl tracking-wide flex flex-row h-[70px] items-center";

  const inputCheckboxEl = document.createElement("input");
  inputCheckboxEl.type = "checkbox";
  inputCheckboxEl.className += "";
  // Pte Checkbox marque tarea ccomo completada

  todoListEl.appendChild(liEl);
};

initialTodos.forEach((todo) => {
  renderTodoItem(todo);
});

todoInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    renderTodoItemFromInputValue();
  }
});

todoAddBtn.addEventListener("click", function () {
  renderTodoItemFromInputValue();
});
