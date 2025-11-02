import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";
import { Modal } from "./modal";

// Todos list
let todos = [];

// Assign inputs
const taskTitleInput = document.querySelector("#task-title-input");
const taskDescInput = document.querySelector("#task-description-input");

// Clear input function
function clearInputs() {
  taskTitleInput.value = '';
  taskDescInput.value = '';
};

// Handler functions group
const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");
    Modal.open();
  },

  handleAddProject() {
    console.log("Add project clicked!");
  },

  handleSaveTodo() {
    const newTodo = createTodo(taskTitleInput.value, taskDescInput.value);

    todos.push(newTodo);
    Renderer.renderTodos(todos);

    // Storage.saveProjects(todos);

    Modal.close();

    // When Modal closes clear input
    clearInputs();
  },

  handleCancelTodo() {
    Modal.close();
    clearInputs();
  }
};

// Initialize function
export function init() {
  // Bind the handlers to Binders in DOM
  Binder.bindAddTodo(Handlers.handleAddTodo);
  Binder.bindAddProject(Handlers.handleAddProject);
  Binder.bindSaveTodo(Handlers.handleSaveTodo);
  Binder.bindCancelTodo(Handlers.handleCancelTodo);
}
