// DOM handler

// Cache DOM elements once
const sidebar = document.getElementById("sidebar");
const todoList = document.querySelector(".todo-list");
const projectList = document.querySelector(".project-list");
const newProjectBtn = document.querySelector(".add-project-btn");
const addTodoBtn = document.querySelector(".add-todo-btn");
// Modal buttons
const saveTodoBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const addProjectBtn = document.querySelector(".add-project-btn");
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
  renderProjects(projects, activeProject) {
    // Loop thru projects and create element
    for (let project of projects) {
      // Create projects box
      const projectBox = document.createElement("div");
      projectBox.classList.add("project-box");

      // Create projects title
      const projectTitle = document.createElement("h3");
      projectTitle.classList.add("project-title");

      // Append the elements
      projectBox.append(projectTitle);
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

        // Create todos title
        const todoTitle = document.createElement("h3");
        todoTitle.textContent = todo.todoTitle || "Untitled";

        // Create todos description
        const todoDescription = document.createElement("p");
        todoDescription.textContent = todo.todoDescription || "No description";

        // Append the elements
        todoBox.append(todoTitle, todoDescription);
        todoList.appendChild(todoBox);
      }
    }
  },

  renderEmpty() {
    todoList.innerHTML = "<p>No todos yet</p>";
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

  // Bind Projects
  bindAddProject(handler) {
    newProjectBtn.addEventListener("click", () => {
      console.log("Works");
      handler();
    });
  },

  bindSaveProject(handler) {
    addProjectBtn.addEventListener("click", (e) => {
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
};

export { Renderer, Binder };
