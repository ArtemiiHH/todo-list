import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";
import { TodoModal, ProjectModal } from "./modal";
import { createProject } from "./project";

// Projects
// Load projects from storage
let projects = Storage.loadProjects().map((p) => createProject(p.title, p.id));

// If no projects, create default
if (projects.length === 0) {
  const defaultProject = createProject("Inbox");
  projects.push(defaultProject);
}

let activeProject = projects[0];

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

    activeProject.addTodo(newTodo);
    Renderer.renderTodos(activeProject.getTodos());

    Storage.saveProjects(projects);

    TodoModal.close();
    clearInputs(taskTitleInput, taskDescInput);
  },

  handleCancelTodo() {
    TodoModal.close();
    clearInputs(taskTitleInput, taskDescInput);
  },

  handleDeleteTodo(id) {
    activeProject.removeTodo(id);
    Storage.saveProjects(projects);
    Renderer.renderTodos(activeProject.getTodos());
  },

  // Handle Projects
  handleAddProject() {
    ProjectModal.open();
  },

  handleSaveProject() {
    const newProject = createProject(projectInput.value);
    projects.push(newProject);
    activeProject = newProject;

    Storage.saveProjects(projects);

    Renderer.renderProjects(projects, activeProject.id);
    Renderer.renderTodos(activeProject.getTodos());

    ProjectModal.close();
    clearInputs(projectInput);
  },

  handleCancelProject() {
    ProjectModal.close();
    clearInputs(projectInput);
  },

  handleDeleteProject(id) {
    const index = projects.findIndex((p) => p.id === id);
    const removedProject = projects.splice(index, 1);
    if (projects.length === 0) {
      activeProject = createProject("Inbox");
    } else if ((removedProject[0].id === activeProject.id)) {
      activeProject = projects[0];
    }
    Storage.saveProjects(projects);
    Renderer.renderProjects(projects, activeProject.id);
    Renderer.renderTodos(activeProject.getTodos());
  },

  handleClickProject(id) {}
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
  Binder.bindDeleteTodo(Handlers.handleDeleteTodo);

  // Bind Projects
  Binder.bindAddProject(Handlers.handleAddProject);
  Binder.bindSaveProject(Handlers.handleSaveProject);
  Binder.bindCancelProject(Handlers.handleCancelProject);
  Binder.bindDeleteProject(Handlers.handleDeleteProject);
  Binder.bindClickProject(Handlers.handleClickProject);
}
