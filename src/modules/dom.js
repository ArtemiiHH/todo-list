const addTodoBtn = document.querySelector(".add-todo-btn");

const Renderer = {};

const Binder = {
  bindAddTodo(handler) {
    if (!addTodoBtn) {
      console.error("Button not found!");
      return;
    }
    addTodoBtn.addEventListener("click", handler);
  },
};

export { Renderer, Binder };
