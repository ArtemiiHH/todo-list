import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";

// Handler functions group
const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");

    const newTodo = createTodo('Real task', 'Description...');

    Renderer.renderTodos([newTodo]);
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
