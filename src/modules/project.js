// Group of TODOs
import { createTodo } from "./todo";

export function createProject(name) {
  const todos = [];
  const addTodo = (todo) => todos.push(todo);
  const getTodos = () => todos;
  const removeTodo = (todo) => todos.pop(todo);
  return { name, addTodo, getTodos, removeTodo };
}
