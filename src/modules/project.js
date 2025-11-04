// Group of TODOs
import { createTodo } from "./todo";

export function createProject(title, id = crypto.randomUUID()) {
  const todos = [];

  const addTodo = (todo) => todos.push(todo);
  const getTodos = () => [...todos];
  const removeTodo = (id) => {
    const index = todos.findIndex((task) => task.id === id);
    if (index !== -1) todos.splice(index, 1);
  };

  return { id, title, addTodo, getTodos, removeTodo };
}
