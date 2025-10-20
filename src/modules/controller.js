// Control the flow of the App
import { createProject } from "./project";
import { createTodo } from "./todo";

// Initialize function
export function init() {
  
  // Create Default project
  return function defaultProject() {
    createProject("Inbox");
  };
}
