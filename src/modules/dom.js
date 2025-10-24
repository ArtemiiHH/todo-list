// DOM handler
import { init } from "./controller";
import { createProject } from "./project";
import { createTodo } from "./todo";

const sidebar = document.getElementById('sidebar');
const container = document.getElementById('content');

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
        container.append(element);
      }
    }
  },

  renderEmpty() {
    console.log("No tasks yet...");
  }
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
  clearTodos() {
    container.innerHTML = '';
  },

  clearProjects() {
    sidebar.innerHTML = '';
  },

  createElement() {},

  formatDate() {},
};

export { Renderer, Binder };
