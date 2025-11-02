import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";
import { Modal } from "./modal";
import { createProject } from "./project";

// Todos list
let todos = [];

// Assign inputs
const taskTitleInput = document.querySelector("#task-title-input");
const taskDescInput = document.querySelector("#task-description-input");

// Clear input function
function clearInputs() {
  taskTitleInput.value = "";
  taskDescInput.value = "";
}

// Handler functions group
const Handlers = {
  handleAddTodo() {
    console.log("Add todo clicked!");
    Modal.open();
  },

  handleAddProject() {
    let projects = [];
    let activeProject = null;

    // Loop thru projects and create element
    for (let project of projects) {
      const projectBox = createElement("div");
      if (project.id === activeProjectId) {
        projectList.append(projectBox);
      }
    }
  },

  handleSaveTodo() {
    const newTodo = createTodo(taskTitleInput.value, taskDescInput.value);

    todos.push(newTodo);
    Renderer.renderTodos(todos);

    // Storage.saveProjects(todos);

    Modal.close();

    // When Modal closes clear input
    clearInputs();
  },

  handleCancelTodo() {
    Modal.close();
    clearInputs();
  },
};

// Initialize function
export function init() {
  // Bind the handlers to Binders in DOM
  Binder.bindAddTodo(Handlers.handleAddTodo);
  Binder.bindAddProject(Handlers.handleAddProject);
  Binder.bindSaveTodo(Handlers.handleSaveTodo);
  Binder.bindCancelTodo(Handlers.handleCancelTodo);
}
