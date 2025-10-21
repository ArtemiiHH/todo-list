// Control the flow of the App
import { createProject } from "./project";
import { createTodo } from "./todo";
import { Storage } from "./storage";
import { Renderer, Binder } from "./dom";

let activeProject;

// Initialize function
export function init() {
  // Load project from storage
  let projects = Storage.loadProjects();

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
}
