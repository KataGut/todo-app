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

  //Crea el "Delete btn" en memoria
  const deleteEl = document.createElement("button");
  deleteEl.type = "button";
  deleteEl.innerText = "DELETE";
  deleteEl.className +=
    "top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none";
  //Identifica el evento click "delete btn" y hace la logica para eliminarlo de "your tasks"
  deleteEl.addEventListener("click", function () {
    liEl.remove();
  });

  //Añade un hijo "li" al "ul"
  todoListEl.appendChild(liEl);
  liEl.className += "flex flex-row h-[80px] items-center gap-6";

  //Añade un hijo "checkbox" al "li"
  liEl.appendChild(inputCheckboxEl);
  //Añade un hijo "p" al "li"
  liEl.appendChild(inputPEl);

  //Añade un hijo "checkbox" al "li"
  liEl.appendChild(deleteEl);

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
