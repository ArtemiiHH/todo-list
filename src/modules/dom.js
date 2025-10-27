// DOM handler
import { createProject } from "./project";
import { createTodo } from "./todo";

const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const addProjectBtn = document.querySelector(".add-project-btn");

// Extra helper functions
const helperFunctions = {
  clearTodos() {
    content.innerHTML = "";
  },

  clearProjects() {
    sidebar.innerHTML = "";
  },

  createElement() {},

  formatDate() {},
};

// Render functions group
const Renderer = {
  renderProjects(projects, activeProjectId) {
    helperFunctions.clearProjects();
    for (let project of projects) {
      const element = document.createElement("div");
      if (project.id === activeProjectId) {
        sidebar.append(element);
      }
    }
  },

  renderTodos(todos) {
    helperFunctions.clearTodos();
    if (todos.length === 0) {
      Renderer.renderEmpty();
    } else {
      for (let todo of todos) {
        const todoBox = document.createElement("div");

        const title = document.createElement("h5");
        title.textContent = todo.title || "Untitled";

        const description = document.createElement("p");
        description.textContent = todo.description || "No description";

        todoBox.append(title, description);
        content.appendChild(todoBox);
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
    console.log("Binder: trying to attach to addTodoBtn", addTodoBtn);
    const addTodoBtn = document.querySelector(".add-todo-btn");

    addTodoBtn.addEventListener("click", () => {
      console.log("Binder: addTodoBtn clicked!");
      handler();
    });
  },

  bindEditTodo(handler) {},

  bindDeleteTodo(handler) {},

  bindToggleTodo(handler) {},

  bindAddProject(handler) {},

  bindSwitchProject(handler) {},

  bindDeleteProject(handler) {},
};

export { Renderer, Binder };
