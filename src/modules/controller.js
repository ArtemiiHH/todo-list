// Control the flow of the App
import { createProject } from "./project";
import { createTodo } from "./todo";
import { Storage } from "./storage";

let activeProject;

// Initialize function
export function init() {
  // Load project from storage
  Storage.loadProjects();
  let projects = Storage.loadProjects();

  // If projects dont exist, load default
  if (!projects || projects.length === 0) {
    
    // Create Default project
    let defaultProject = createProject("Inbox");
    projects.push(defaultProject);
    activeProject = projects[0];
    Storage.loadProjects();
  }
}
