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

    // Loop thru projects and create element
    for (let project of projects) {
      const projectBox = createElement('div');
      if (project.id === activeProjectId) {
        projectList.append(projectBox);
      }
    }
  },

  renderTodos(todos) {
    helperFunctions.clearTodos();

    if (todos.length === 0) {
      Renderer.renderEmpty();
    } else {
      // Loop thru todos and create element
      for (let todo of todos) {
        // Create todos box
        const todoBox = createElement('div');

        // Create todos title
        const title = createElement('h5');
        title.textContent = todo.title || 'Untitled';

        // Create todos description
        const description = createElement('p');
        description.textContent = todo.description || 'No description';

        // Append the elements
        todoBox.append(title, description);
        todoList.appendChild(todoBox);
      }
    }
  },

  renderEmpty() {
    todoList.innerHTML = '<p>No todos yet</p>';
  },
};

// Binder functions group
const Binder = {
  bindAddTodo(handler) {
    addTodoBtn.addEventListener("click", handler);
  },

  bindAddProject(handler) {
    addProjectBtn.addEventListener('click', handler);
  },
};

export { Renderer, Binder };
