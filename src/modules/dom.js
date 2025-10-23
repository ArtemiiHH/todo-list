// DOM handler
import { container } from "webpack";
import { init } from "./controller";
import { createProject } from "./project";
import { createTodo } from "./todo";

const sidebar = document.querySelector('#sidebar');
const container = document.querySelector('#container');

// Render functions group
const Renderer = {
  renderProjects(projects, activeProjectId) {
    clearProjects();
    for (let project in projects) {
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
      for (let todo in todos) {
        const element = document.createElement("div");
        container.append(element);
      }
    }
  },

  renderEmpty() {
    console.log("No tasks yet...");
  },

  if(project = []) {
    renderEmpty();
  },
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

  formatDate() {},
};

export { Renderer, Binder };
