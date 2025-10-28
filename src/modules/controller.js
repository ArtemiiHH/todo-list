import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";

// Todos list
let todos = [];

// Handler functions group
const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");

    const newTodo = createTodo("Real task", "Description...");

    todos.push(newTodo);
    Renderer.renderTodos(todos);

    // Storage.saveProjects(todos);
  },

  handleAddProject() {
    console.log("Add project clicked!");
  },
};

// Initialize function
export function init() {
  // Bind the handlers to Binders in DOM
  Binder.bindAddTodo(Handlers.handleAddTodo);
  Binder.bindAddProject(Handlers.handleAddProject);
}
