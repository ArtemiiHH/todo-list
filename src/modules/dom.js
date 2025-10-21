// DOM handler
import { init } from "./controller";
import { createProject } from "./project";
import { createTodo } from "./todo";

// Render functions group
const Renderer = {
  renderProjects(projects, activeProjectId) {

  },

  renderTodos(todos) {},

  renderEmpty() {},
};

// Bind functions group
const Binder = {
  bindAddTodo(handler) {},

  bindEditTodo(handler) {},

  bindDeleteTodo(handler) {},

  bindToggleTodo(handler) {},

  bindSwitchProject(handler) {},

  bindAddProject(handler) {},

  bindDeleteProject(handler) {},
};

// Extra helper functions
const helperFunctions = {
  clearTodos() {},

  clearProjects() {},

  createElement() {},

  formatDate() {}
};

export { Renderer, Binder };
