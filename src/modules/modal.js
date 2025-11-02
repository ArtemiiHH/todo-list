const modal = document.querySelector("#todo-modal");

const Modal = {
  open() {
    modal.classList.add("open");
  },

  close() {
    modal.classList.remove("open");
  },
};

export { Modal };
