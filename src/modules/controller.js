// Control the flow of the App
import { createProject } from "./project";
import { createTodo } from "./todo";

export function initialize() {
  
  // Create Default project
  return function defaultProject() {
    createProject("Inbox");
  };
}
