// DOM handler

// Cache DOM elements once
const todoList = document.querySelector(".todo-list");
const projectList = document.querySelector(".project-list");
const addTodoBtn = document.querySelector(".add-todo-btn");
// Modal buttons
const saveTodoBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const addNewProjectBtn = document.querySelector(".add-new-project-btn");
const saveProjectBtn = document.querySelector(".save-project-btn");
const cancelProjectBtn = document.querySelector(".cancel-project-btn");

// Extra helper functions
const helperFunctions = {
  clearTodos() {
    todoList.innerHTML = "";
  },

  clearProjects() {
    projectList.innerHTML = "";
  },

  createElement() {},

  formatDate() {},
};

// Render functions group
const Renderer = {
  renderProjects(projects, activeProjectId) {
    helperFunctions.clearProjects();

    // Loop thru projects and create element
    for (let project of projects) {
      // Create projects box
      const projectBox = document.createElement("div");
      projectBox.classList.add("project-box");
      projectBox.dataset.id = project.id;
      if (project.id === activeProjectId) projectBox.classList.add("active");
      // Create projects title
      const title = document.createElement("h3");
      title.textContent = project.title;

      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-project-btn");
      deleteBtn.dataset.id = project.id;
      deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

      // Append elements
      projectBox.append(title, deleteBtn);
      projectList.appendChild(projectBox);
    }
  },

  renderTodos(todos) {
    helperFunctions.clearTodos();

    if (todos.length === 0) {
      Renderer.renderEmpty();
    } else {
      // Loop thru todos and create element
      for (let todo of todos) {
        // Create todos box
        const todoBox = document.createElement("div");
        todoBox.classList.add("todo-box");
        // Text + desc wrap container
        const textWrapContainer = document.createElement("div");
        textWrapContainer.classList.add("text-wrap-container");
        // Create todos title
        const title = document.createElement("h3");
        title.textContent = todo.title || "Untitled";
        // Create todos description
        const description = document.createElement("p");
        description.textContent = todo.description || "No description";
        // Date wrap container
        const dateWrapContainer = document.createElement("div");
        textWrapContainer.classList.add("date-wrap-container");
        // Create date title
        const dateTitle = document.createElement("h3");
        dateTitle.textContent = "Date due:";
        // Create date
        const date = document.createElement("p");
        date.textContent = todo.dueDate || "No date selected";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-todo-btn");
        deleteBtn.dataset.id = todo.id;
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        // Append elements
        textWrapContainer.append(title, description);
        dateWrapContainer.append(dateTitle, date);
        todoBox.append(textWrapContainer, dateWrapContainer, deleteBtn);
        todoList.appendChild(todoBox);
      }
    }
  },

  renderEmpty() {
    todoList.innerHTML = "<p>No tasks added</p>";
  },
};

// Binder functions group
const Binder = {
  // Bind Todos
  bindAddTodo(handler) {
    addTodoBtn.addEventListener("click", handler);
  },

  bindSaveTodo(handler) {
    saveTodoBtn.addEventListener("click", (e) => {
      // Prevent default reload
      e.preventDefault();
      handler();
    });
  },

  bindCancelTodo(handler) {
    cancelBtn.addEventListener("click", (e) => {
      // Prevent default reload
      e.preventDefault();
      handler();
    });
  },

  bindDeleteTodo(handler) {
    todoList.addEventListener("click", (e) => {
      const deleteBtn = e.target.closest(".delete-todo-btn");
      if (!deleteBtn) return;
      handler(deleteBtn.dataset.id);
    });
  },

  // Bind Projects
  bindAddProject(handler) {
    addNewProjectBtn.addEventListener("click", handler);
  },

  bindSaveProject(handler) {
    saveProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  },

  bindCancelProject(handler) {
    cancelProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  },

  bindDeleteProject(handler) {
    projectList.addEventListener("click", (e) => {
      const deleteBtn = e.target.closest(".delete-project-btn");
      if (!deleteBtn) return;
      handler(deleteBtn.dataset.id);
    });
  },

  bindClickProject(handler) {
    projectList.addEventListener("click", (e) => {
      // ignore delete button
      if (e.target.classList.contains("delete-project-btn")) return;

      const box = e.target.closest(".project-box");
      if (!box) return;

      handler(box.dataset.id);
    });
  },
};

export { Renderer, Binder };
