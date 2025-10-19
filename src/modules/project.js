// Group of TODOs
import { createTodo } from "./todo";

export function createProject(name) {
  const todos = [];

  // Add a todo (already created outside)
  const addTodo = (todo) => {
    todos.push(todo);
  };

  // Return a copy of todos to protect internal state
  const getTodos = () => [...todos];

  // Remove a specific todo by id or reference
  const removeTodo = (id) => {
    const index = todos.findIndex((task) => task.id === id);
    if (index !== -1) todos.splice(index, 1);
  };

  return { name, addTodo, getTodos, removeTodo };
}
