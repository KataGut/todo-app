import { v4 as uuidv4 } from "uuid";

//Objetos iniciales
const todos = [
  {
    id: uuidv4(),
    name: "Barrer",
    completed: true,
  },
  {
    id: uuidv4(),
    name: "Sacar al perro",
    completed: false,
  },
  {
    id: uuidv4(),
    name: "Sacar al gato",
    completed: false,
  },
  {
    id: uuidv4(),
    name: "Sacar al pájaro",
    completed: false,
  },
];

let filterBy = "all"; // "completed" o "pending"

//Acceder a los elementos HTML en JS
const todoInputEl = document.getElementById("todo-input");
const todoAddBtn = document.getElementById("add-todo-btn");
const todoListEl = document.getElementById("todo-list");
const filterSelectEl = document.getElementById("status-filter");

function renderAllTodos() {
  //limpia todos los Todos
  todoListEl.innerText = "";

  const filteredTodos = todos.filter(
    (todo) =>
      (filterBy === "pending" && !todo.completed) ||
      (filterBy === "completed" && todo.completed) ||
      filterBy === "all"
  );

  if (filteredTodos.length === 0) {
    const liEmptyEl = document.createElement("li");
    liEmptyEl.innerHTML = "There are not results";
    todoListEl.appendChild(liEmptyEl);
  }

  filteredTodos.forEach((todo) => renderTodoItem(todo));
}

//Función para añadir nuevo todo item al arreglo y renderizar los todos
function addNewTodoItem() {
  const newTodoItem = {
    id: uuidv4(),
    // obtener valor del input
    name: todoInputEl.value,
    completed: false,
  };
  // Añade nuevo Todo al arreglo
  todos.push(newTodoItem);
  // limpiar valor del input
  todoInputEl.value = "";

  renderAllTodos();
}

//Función que hace posible mostrar las tareas en la pantalla
const renderTodoItem = (todo) => {
  //Crea un elemento hijo "li" en memoria
  const liEl = document.createElement("li");

  //Crea el checkbox en memoria
  const inputCheckboxEl = document.createElement("input");
  inputCheckboxEl.type = "checkbox";
  inputCheckboxEl.id = todo.id;
  inputCheckboxEl.className += "size-5 m-3";
  inputCheckboxEl.checked = todo.completed;
  inputCheckboxEl.addEventListener("change", function (event) {
    todo.completed = event.target.checked;

    renderAllTodos();
  });

  //Crea el "p" en memoria
  const inputLabelEl = document.createElement("label");
  inputLabelEl.innerText = todo.name;
  inputLabelEl.setAttribute("for", todo.id);
  inputLabelEl.className += "flex-grow text-white text-xl tracking-wide";

  //Crea el "Delete btn" en memoria
  const deleteEl = document.createElement("button");
  deleteEl.type = "button";
  deleteEl.innerText = "DELETE";
  deleteEl.className +=
    "m-3 text-base top-1 z-10 select-none rounded bg-pink-500 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none";

  //Identifica el evento click "delete btn" y hace la logica para eliminarlo de "your tasks"
  deleteEl.addEventListener("click", function () {
    // encontrar el id del li a eliminar
    const idToRemove = todo.id;
    // buscar indice del item en el arreglo a eliminar
    const indexOfItemToRemove = todos.findIndex(
      (item) => item.id === idToRemove
    );

    //si encontró el indice del item a eliminar
    // just in case, puede nunca pasar
    if (indexOfItemToRemove !== -1) {
      // eliminarlo del arreglo
      todos.splice(indexOfItemToRemove, 1);

      // renderizar all todos again
      renderAllTodos();
    }
  });

  //Añade un hijo "li" al "ul"
  todoListEl.appendChild(liEl);
  liEl.className += "flex flex-row h-[80px] items-center gap-6";

  //Añade un hijo "checkbox" al "li"
  liEl.appendChild(inputCheckboxEl);
  //Añade un hijo "p" al "li"
  liEl.appendChild(inputLabelEl);

  //Añade un hijo "checkbox" al "li"
  liEl.appendChild(deleteEl);

  // Pte Checkbox marque tarea como completada
};

renderAllTodos();

//Identifica el evento de enter y hace la logica para agregarlo a "your tasks"
todoInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNewTodoItem();
  }
});

//Identifica el evento click "add todo" y hace la logica para agregarlo a "your tasks"
todoAddBtn.addEventListener("click", function () {
  addNewTodoItem();
});

filterSelectEl.addEventListener("change", function () {
  filterBy = filterSelectEl.value;
  renderAllTodos();
});
