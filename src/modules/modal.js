const todoModal = document.querySelector("#todo-modal");
const projectModal = document.querySelector("#project-modal");

const TodoModal = {
  open() {
    todoModal.classList.add("open");
  },

  close() {
    todoModal.classList.remove("open");
  },
};

const ProjectModal = {
  open() {
    projectModal.classList.add("open");
  },

  close() {
    projectModal.classList.remove("open");
  },
};

export { TodoModal, ProjectModal };
