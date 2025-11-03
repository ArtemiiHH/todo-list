import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";
import { TodoModal, ProjectModal } from "./modal";
import { createProject } from "./project";

// Todos list
let todos = [];
// Projects
let projects = [];
let activeProject = null;

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
    ProjectModal.open();
  },

  handleSaveProject() {
    ProjectModal.close();
  },

  handleCancelProject() {
    ProjectModal.close();
    clearInputs();
  },
};

// Initialize function
export function init() {
  if (!projects || projects.length === 0) {
    const defaultProject = createProject("Inbox");
    projects.push(defaultProject);
    activeProject = defaultProject;
  }

  Renderer.renderProjects(projects, activeProject.id);

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
