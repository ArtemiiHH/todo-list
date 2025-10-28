import { Renderer, Binder } from "./dom";

const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");
  },

  handleAddProject() {
    console.log('Add project clicked!');
  },
};

export function init() {
    Binder.bindAddTodo(Handlers.handleAddTodo);
    Binder.bindAddProject(Handlers.handleAddProject);
}
