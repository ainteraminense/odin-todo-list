import { createProject } from "./project.js";

export function allProjects() {
    const projects = getProjectsFromDatabase() != null ? getConvertedProjectsFromDB() : [];

    const addProject = (project) => {
        projects.push(project);
        saveProjectToDatabase();
    };

    const initializeDefaultProj = () => {
        const defaultProj = createProject();
        addProject(defaultProj);
    };

    const getAllProjects = () => {
        return projects;
    }

    function getConvertedProjectsFromDB() {
        const projects = JSON.parse(getProjectsFromDatabase());
        return projects;
    };

    function saveProjectToDatabase() {
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    function getProjectsFromDatabase() {
        return localStorage.getItem("projects");
    };

    return { addProject, getAllProjects, getConvertedProjectsFromDB, initializeDefaultProj }
}

