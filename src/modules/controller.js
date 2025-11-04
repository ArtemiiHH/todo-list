import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";
import { TodoModal, ProjectModal } from "./modal";
import { createProject } from "./project";

// Projects
let projects = Storage.loadProjects();
let activeProject = projects[0] || createProject('Inbox');

if (projects.length === 0) projects.push(activeProject);

const projectList = document.querySelector(".project-list");
// Assign inputs
const taskTitleInput = document.querySelector("#task-title-input");
const taskDescInput = document.querySelector("#task-description-input");
const projectInput = document.querySelector("#project-name-input");

// Clear input function
function clearInputs(...inputs) {
  inputs.forEach((input) => (input.value = ""));
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

    activeProject.todos.push(newTodo);
    Renderer.renderTodos(activeProject.todos);

    // Storage.saveProjects(todos);

    TodoModal.close();

    // When Modal closes clear input
    clearInputs(taskTitleInput, taskDescInput);
  },

  handleCancelTodo() {
    TodoModal.close();
    clearInputs(taskTitleInput, taskDescInput);
  },

  // Handle Projects
  handleAddProject() {
    ProjectModal.open();
  },

  handleSaveProject() {
    const newProject = createProject(projectInput.value);
    projects.push(newProject);
    activeProject = newProject;

    Renderer.renderProjects(projects, activeProject.id);
    Renderer.renderTodos(activeProject.todos);

    ProjectModal.close();

    clearInputs(projectInput);
  },

  handleCancelProject() {
    ProjectModal.close();
    clearInputs(projectInput);
  },
};

// Initialize function
export function init() {
  if (!projects || projects.length === 0) {
    const defaultProject = createProject("Inbox");
    projects.push(defaultProject);
    activeProject = defaultProject;
  }

  // Render Default project
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
