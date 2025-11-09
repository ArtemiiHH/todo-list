import { createProject } from "./project";

// Storage handler
export const Storage = {
  saveProjects(projects) {
    const plainProjects = projects.map((project) => ({
      id: project.id,
      title: project.title,
      todos: project.getTodos(),
    }));

    localStorage.setItem("projects", JSON.stringify(plainProjects));
  },

  loadProjects() {
    const data = JSON.parse(localStorage.getItem("projects")) || [];
    return data.map((p) => createProject(p.title, p.id, p.todos));
  },
};
