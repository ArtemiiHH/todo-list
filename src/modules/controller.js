// Control the flow of the App
import { createProject } from "./project";
import { createTodo } from "./todo";
import { Storage } from "./storage";
import { Renderer, Binder } from "./dom";

let projects = [];
let activeProject;

// Handlers Object
const Handlers = {
  handleAddTodo() {
    createTodo();
    activeProject.addTodo();
    Storage.saveProjects();
    Renderer.renderTodos();
  },

  handleEditTodo() {},

  handleDeleteTodo() {},

  handleAddProject() {},

  handleSwitchProject() {},

  handleDeleteProject() {},
};

// Initialize function
export function init() {
  // Load project from storage
  projects = Storage.loadProjects();

  // Check for empty or missing data
  if (!projects || projects.length === 0) {
    // Make sure projects is an array
    projects = [];

    // Create Default project
    let defaultProject = createProject("Inbox");
    projects.push(defaultProject);
    activeProject = projects[0];

    // Save back to Storage
    Storage.saveProjects(projects);
  }

  // Set active project for first project
  activeProject = projects[0];

  // Render the initial UI
  // Render Sidebar
  Renderer.renderProjects(projects, activeProject);
  // Render Todos in Content
  Renderer.renderTodos(activeProject.getTodos());

  // Connect Binder to Hanlders
  Binder.bindAddTodo(Handlers.handleAddTodo);
  Binder.bindAddProject(Handlers.handleAddProject);
}
