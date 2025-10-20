// Storage handler
export const Storage = {
  saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
  },

  loadProjects() {
    return JSON.parse(localStorage.getItem('projects')) || [];
  }
}