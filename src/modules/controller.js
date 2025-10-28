import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";

// Handler functions group
const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");

    const dummyTodo = {
      title: "Test task",
      description: "Test description...",
    };
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
