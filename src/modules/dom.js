// DOM handler
import { init } from "./controller";
import { createProject } from "./project";
import { createTodo } from "./todo";

const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const addProjectBtn = document.querySelector(".add-project-btn");
const addTodoBtn = document.querySelector(".add-todo-btn");

// Render functions group
const Renderer = {
  renderProjects(projects, activeProjectId) {
    clearProjects();
    for (let project of projects) {
      const element = document.createElement("div");
      if (project.id === activeProjectId) {
        sidebar.append(element);
      }
    }
  },

  renderTodos(todos) {
    clearTodos();
    if (todos.length === 0) {
      renderEmpty();
    } else {
      for (let todo of todos) {
        const element = document.createElement("div");
        content.append(element);
      }
    }
  },

  renderEmpty() {
    content.innerHTML = "";
  },
};

// Bind functions group
const Binder = {
  bindAddTodo(handler) {},

  bindEditTodo(handler) {},

  bindDeleteTodo(handler) {},

  bindToggleTodo(handler) {},

  bindAddProject(handler) {},

  bindSwitchProject(handler) {},

  bindDeleteProject(handler) {},
};

// Extra helper functions
const helperFunctions = {
  clearTodos() {
    container.innerHTML = "";
  },

  clearProjects() {
    sidebar.innerHTML = "";
  },

  createElement() {},

  formatDate() {},
};

export { Renderer, Binder };
