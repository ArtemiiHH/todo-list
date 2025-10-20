// Control the flow of the App
import { createProject } from "./project";
import { createTodo } from "./todo";
import { Storage } from "./storage";

// Initialize function
export function init() {
  // Load project from storage
  Storage.loadProjects(createProject);

  // If projects dont exist, load default
  if (Storage.loadProjects(!createProject)) {
    
    // Create Default project
    const defaultProject = createProject("Inbox");
    activeProject = defaultProject;
  }
}
