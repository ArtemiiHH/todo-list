// DOM handler
import { init } from "./controller";
import { createProject } from "./project";
import { createTodo } from "./todo";
import { Handlers } from "./controller";

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
      Renderer.renderEmpty();
    } else {
      for (let todo of todos) {
        const todoBox = document.createElement("div");
        const title = document.createElement('h5');
        title.textContent = 'Title';
        const description = document.createElement('p');
        description.textContent = 'Dummy text';
        content.appendChild(todoBox);
        todoBox.append(title, description);
      }
    }
  },

  renderEmpty() {
    content.innerHTML = "";
  },
};

// Bind functions group
const Binder = {
  bindAddTodo(handler) {
    // Add task button handler
    addTodoBtn.addEventListener('click', handler);
  },

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
