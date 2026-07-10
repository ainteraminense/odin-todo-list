import { createProject } from "./project.js";

export function allProjects() {
    const projects = [];

    const addProject = (project) => {
        projects.push(project);
        saveProjectToDatabase()
    }

    const getAllProjects = () => {
        projects = getProjectsFromDatabase();
        return projects;
    }

    const initializeDefaultProj = () => {
        const defaultProj = createProject();
        addProject(defaultProj);
        return projects;
    }

    function saveProjectToDatabase() {
        localStorage.setItem("projects", projects);
    }

    function getProjectsFromDatabase() {
        return localStorage.getItem(projects);
    }

    return { addProject, getAllProjects, initializeDefaultProj }
}

