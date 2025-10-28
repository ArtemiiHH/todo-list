import { Renderer, Binder } from "./dom";

const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");
  },
};

export function init() {
    Binder.bindAddTodo(Handlers.handleAddTodo);
}
