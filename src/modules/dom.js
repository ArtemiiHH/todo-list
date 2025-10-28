// DOM handler
import { createProject } from "./project";
import { createTodo } from "./todo";

const addTodoBtn = document.querySelector(".add-todo-btn");

const Renderer = {};

const Binder = {
  bindAddTodo(handler) {
    addTodoBtn.addEventListener("click", handler);
  },
};

export { Renderer, Binder };
