// DOM handler
import { createProject } from "./project";
import { createTodo } from "./todo";

// Cache DOM elements once
const sidebar = document.getElementById("sidebar");
const todoList = document.querySelector(".todo-list");
const projectList = document.querySelector(".project-list");
const newProjectBtn = document.querySelector(".add-project-btn");
const addTodoBtn = document.querySelector(".add-todo-btn");
// Modal buttons
const saveTodoBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const addProjectBtn = document.querySelector(".add-project-btn");
const cancelProjectBtn = document.querySelector(".cancel-project-btn");

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
  renderProjects(projects, activeProjectId) {},

  renderTodos(todos) {
    helperFunctions.clearTodos();

    if (todos.length === 0) {
      Renderer.renderEmpty();
    } else {
      // Loop thru todos and create element
      for (let todo of todos) {
        // Create todos box
        const todoBox = document.createElement("div");
        todoBox.classList.add("todo-box");

        // Create todos title
        const title = document.createElement("h3");
        title.textContent = todo.title || "Untitled";

        // Create todos description
        const description = document.createElement("p");
        description.textContent = todo.description || "No description";

        // Append the elements
        todoBox.append(title, description);
        todoList.appendChild(todoBox);
      }
    }
  },

  renderEmpty() {
    todoList.innerHTML = "<p>No todos yet</p>";
  },
};

// Binder functions group
const Binder = {
  // Bind Todos
  bindAddTodo(handler) {
    addTodoBtn.addEventListener("click", handler);
  },

  bindSaveTodo(handler) {
    saveTodoBtn.addEventListener("click", (e) => {
      // Prevent default reload
      e.preventDefault();
      handler();
    });
  },

  bindCancelTodo(handler) {
    cancelBtn.addEventListener("click", (e) => {
      // Prevent default reload
      e.preventDefault();
      handler();
    });
  },

  // Bind Projects
  bindAddProject(handler) {
    newProjectBtn.addEventListener("click", handler);
  },

  bindSaveProject(handler) {
    addProjectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  },

  bindCancelProject(handler) {
    cancelProjectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }
};

export { Renderer, Binder };
