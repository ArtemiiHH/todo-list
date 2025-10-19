export function createTodo(
  title,
  description,
  dueDate,
  priority,
  completed = false
) {
  return { title, description, dueDate, priority, completed };
}
