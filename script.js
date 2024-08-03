//Objetos de ejemplo
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

//Acceder a los elementos HTML en JS
const todoInputEl = document.getElementById("todo-input");
const todoAddBtn = document.getElementById("add-todo-btn");

//Mostrar Todo escrito en el input a "Your Tasks"
function renderTodoItemFromInputValue() {
  const valueInput = {
    // obtener valor del input
    name: todoInputEl.value,
  };
  // llamar a la función renderTodoItem con ese valor para mostrarlo
  renderTodoItem(valueInput);
  // limpiar valor del input
  todoInputEl.value = "";
}

//Función que hace posible mostrar las tareas en la pantalla
const renderTodoItem = (todo) => {
  //Crea un elemento hijo "li" en memoria
  const todoListEl = document.getElementById("todo-list");
  const liEl = document.createElement("li");

  //Crea el checkbox en memoria
  const inputCheckboxEl = document.createElement("input");
  inputCheckboxEl.type = "checkbox";
  inputCheckboxEl.className += "";

  //Crea el "p" en memoria
  const inputPEl = document.createElement("p");
  inputPEl.innerText = todo.name;
  inputPEl.className += "flex-grow text-white text-xl tracking-wide";

  //Añade un hijo "li" al "ul"
  todoListEl.appendChild(liEl);
  liEl.className += "flex flex-row h-[80px] items-center gap-6";

  //Añade un hijo "checkbox" al "li"
  liEl.appendChild(inputCheckboxEl);
  //Añade un hijo "p" al "li"
  liEl.appendChild(inputPEl);

  // Pte Checkbox marque tarea como completada
};

//Es el ejemplo de cómo se mostraria en la pag cada tarea creada
initialTodos.forEach((todo) => {
  renderTodoItem(todo);
});

//Identifica el evento de enter y hace la logica para agregarlo a "your tasks"
todoInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    renderTodoItemFromInputValue();
  }
});

//Identifica el evento click "add todo" y hace la logica para agregarlo a "your tasks"
todoAddBtn.addEventListener("click", function () {
  renderTodoItemFromInputValue();
});
