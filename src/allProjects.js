import { createProject } from "./project.js";

export function allProjects() {
    const projects = JSON.parse(getProjectsFromDatabase()) != null ? JSON.parse(getProjectsFromDatabase()) : [];

    const addProject = (project) => {
        projects.push(project);
        saveProjectToDatabase();
    };

    const getAllProjects = () => {
        return JSON.parse(getProjectsFromDatabase());
    };

    const initializeDefaultProj = () => {
        const defaultProj = createProject();
        addProject(defaultProj);
    };

    function saveProjectToDatabase() {
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    function getProjectsFromDatabase() {
        return localStorage.getItem("projects");
    };

    return { addProject, getAllProjects, initializeDefaultProj }
}

