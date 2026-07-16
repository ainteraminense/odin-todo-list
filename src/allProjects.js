import { createProject } from "./project.js";

export function allProjects() {
    const projects = getProjectsFromDatabase() ? getConvertedProjectsFromDB() : [];
    

    const addProject = (project) => {
        projects.push(project);
        saveProjectToDatabase();
    };

    const initializeDefaultProj = () => {
        const defaultProj = createProject();
        projects.push(defaultProj);
        saveProjectToDatabase();
    };

    const getAllProjects = () => {
        return projects;
    }

    const deActivateProjects = () => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].isActive === true) {
                projects[i].isActive = false;
            }
        };
    };

    const getCurrentProject = () => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].isActive === true) {
                return projects[i];
            }
        };
    };

    function getConvertedProjectsFromDB() {
        const convertedProjects = [];
        for (let i = 0;i<localStorage.length;i++) {
            let key = localStorage.key(i);
            const unconvertedProjects = JSON.parse(localStorage.getItem(key));
            unconvertedProjects.forEach(unconvertedProject => {
                const convertedProject = createProject(unconvertedProject.name, unconvertedProject.isActive);
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

    return { addProject, initializeDefaultProj, getAllProjects, deActivateProjects,getCurrentProject }
}

