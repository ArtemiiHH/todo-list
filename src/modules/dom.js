// DOM handler
import { createProject } from "./project";
import { createTodo } from "./todo";

// Cache DOM elements once
const sidebar = document.getElementById("sidebar");
const todoList = document.querySelector(".todo-list");
const projectList = document.querySelector(".project-list");
const addProjectBtn = document.querySelector(".add-project-btn");
const addTodoBtn = document.querySelector(".add-todo-btn");

// Extra helper functions
const helperFunctions = {
  clearTodos() {
    todoList.innerHTML = "";
  },

  clearProjects() {
    projectList.innerHTML = "";
  },

  createElement() {},

  formatDate() {},
};

// Render functions group
const Renderer = {
  renderProjects(projects, activeProjectId) {
    helperFunctions.clearProjects();

    for (let project of projects) {}
  },

  renderTodos(todos) {},

  renderEmpty() {},
};

// Binder functions group
const Binder = {
  bindAddTodo(handler) {
    addTodoBtn.addEventListener("click", handler);
  },

  bindAddProject(handler) {},
};

export { Renderer, Binder };
