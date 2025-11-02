import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";
import { TodoModal, ProjectModal } from "./modal";
import { createProject } from "./project";

// Todos list
let todos = [];

// Assign inputs
const taskTitleInput = document.querySelector("#task-title-input");
const taskDescInput = document.querySelector("#task-description-input");
const projectInput = document.querySelector("#project-name-input");

// Clear input function
function clearInputs() {
  taskTitleInput.value = "";
  taskDescInput.value = "";
  projectInput.value = "";
}

// Handler functions group
const Handlers = {
  // Handle Todos
  handleAddTodo() {
    console.log("Add todo clicked!");
    TodoModal.open();
  },

  handleSaveTodo() {
    const newTodo = createTodo(taskTitleInput.value, taskDescInput.value);

    todos.push(newTodo);
    Renderer.renderTodos(todos);

    // Storage.saveProjects(todos);

    TodoModal.close();

    // When Modal closes clear input
    clearInputs();
  },

  handleCancelTodo() {
    TodoModal.close();
    clearInputs();
  },

  // Handle Projects
  handleAddProject() {
    // let projects = [];
    // let activeProject = null;

    // if (!projects || projects.length === 0) {
    //   const defaultProjects = createProject("Inbox");
    //   defaultProjects = activeProject;
    // }

    ProjectModal.open();
  },

  handleSaveProject() {},

  handleCancelProject() {},
};

// Initialize function
export function init() {
  // Bind the handlers to Binders in DOM
  // Bind Todos
  Binder.bindAddTodo(Handlers.handleAddTodo);
  Binder.bindSaveTodo(Handlers.handleSaveTodo);
  Binder.bindCancelTodo(Handlers.handleCancelTodo);

  // Bind Projects
  Binder.bindAddProject(Handlers.handleAddProject);
  Binder.bindSaveProject(Handlers.handleSaveProject);
  Binder.bindCancelProject(Handlers.handleCancelProject);
}
