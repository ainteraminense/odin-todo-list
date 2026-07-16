import { createProject } from "./project.js";

export function allProjects() {
    const projects = getProjectsFromDatabase() ? getConvertedProjectsFromDB() : [];


    const addProject = (project) => {
        projects.push(project);
        saveProjectToDatabase();
    };

    function initializeDefaultProj() {
        const defaultProj = createProject();
        saveProjectToDatabase();
    };

    const getAllProjects = () => {
        return projects;
    }

    function getConvertedProjectsFromDB() {
        const convertedProjects = [];
        for (let i = 0;i<localStorage.length;i++) {
            let key = localStorage.key(i);
            const unconvertedProjects = JSON.parse(localStorage.getItem(key));
            unconvertedProjects.forEach(unconvertedProject => {
                const convertedProject = createProject(unconvertedProject.name);
                convertedProjects.push(convertedProject);
            });
        }
        return convertedProjects;
    };

    function saveProjectToDatabase() {
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    function getProjectsFromDatabase() {
        return localStorage.getItem("projects");
    };

    return { addProject, getAllProjects }
}

