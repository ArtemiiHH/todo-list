import { Renderer, Binder } from "./dom";

// Handler functions group
const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");
  },

  handleAddProject() {
    console.log('Add project clicked!');
  },
};

// Initialize function
export function init() {

  // Bind the handlers to Binders in DOM
    Binder.bindAddTodo(Handlers.handleAddTodo);
    Binder.bindAddProject(Handlers.handleAddProject);
}
