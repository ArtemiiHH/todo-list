import { Renderer, Binder } from "./dom";
import { Storage } from "./storage";
import { createTodo } from "./todo";
import { TodoModal, ProjectModal } from "./modal";
import { createProject } from "./project";

// Projects
// Load projects from storage
let projects = Storage.loadProjects().map((p) =>
  createProject(p.title, p.id, p.todos)
);
// If no projects, create default
if (projects.length === 0) {
  const defaultProject = createProject("Inbox");
  projects.push(defaultProject);
}
let activeProject = projects[0];

// Assign inputs
const taskTitleInput = document.querySelector("#task-title-input");
const taskDescInput = document.querySelector("#task-description-input");
const projectInput = document.querySelector("#project-name-input");
const taskDateInput = document.querySelector('#task-date-input');
const taskPriorityInput = document.querySelector('#task-priority-input');

const contentProjectTitle = document.querySelector(".project-title");

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
    contentProjectTitle.textContent = activeProject.title;

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
    } else if (removedProject[0].id === activeProject.id) {
      activeProject = projects[0];
    }
    contentProjectTitle.textContent = activeProject.title;
    Storage.saveProjects(projects);
    Renderer.renderProjects(projects, activeProject.id);
    Renderer.renderTodos(activeProject.getTodos());
  },

  handleClickProject(id) {
    const clickedProject = projects.find((p) => p.id === id);
    if (!clickedProject) return;
    activeProject = clickedProject;
    contentProjectTitle.textContent = activeProject.title;
    Renderer.renderProjects(projects, activeProject.id);
    Renderer.renderTodos(activeProject.getTodos());
  },
};

// Initialize function
export function init() {
  if (!projects || projects.length === 0) {
    const defaultProject = createProject("Inbox");
    projects.push(defaultProject);
    activeProject = defaultProject;
  }
  contentProjectTitle.textContent = activeProject.title;

  // Render Default project
  Renderer.renderProjects(projects, activeProject.id);
  // Render Default todos
  Renderer.renderTodos(activeProject.getTodos());

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
