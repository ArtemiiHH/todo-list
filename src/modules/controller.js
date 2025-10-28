import { Renderer, Binder } from "./dom";

const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");
  },
};

export function init() {
    console.log("Init called");
    Binder.bindAddTodo(Handlers.handleAddTodo);
}
