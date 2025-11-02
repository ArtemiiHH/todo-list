import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";

// Todos list
let todos = [];

const taskTitleInput = document.querySelector('#task-title-input');
const taskDescInput = document.querySelector('#task-description-input');

// Handler functions group
const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");

    const newTodo = createTodo(taskTitleInput.value, taskDescInput.value);

    todos.push(newTodo);
    Renderer.renderTodos(todos);

    // Storage.saveProjects(todos);
  },

  handleAddProject() {
    console.log("Add project clicked!");
  },

  handleSaveTodo() {}
};

// Initialize function
export function init() {
  // Bind the handlers to Binders in DOM
  Binder.bindAddTodo(Handlers.handleAddTodo);
  Binder.bindAddProject(Handlers.handleAddProject);
  Binder.bindSaveTodo(Handlers.handleSaveTodo);
}
