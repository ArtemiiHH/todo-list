// Single TODO object
export function createTodo(
  title,
  description,
  dueDate,
  priority,
  completed = false,
  id = crypto.randomUUID()
) {
  return { title, description, dueDate, priority, completed, id };
}
