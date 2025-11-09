// Group of TODOs
import { createTodo } from "./todo";

export function createProject(
  title,
  id = crypto.randomUUID(),
  existingTodos = []
) {
  const todos = existingTodos.map((t) =>
    createTodo(t.title, t.description, t.dueDate, t.priority, t.completed, t.id)
  );

  const addTodo = (todo) => todos.push(todo);
  const getTodos = () => todos;
  const removeTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    if (index !== -1) todos.splice(index, 1);
  };

  return { id, title, todos, addTodo, getTodos, removeTodo };
}
