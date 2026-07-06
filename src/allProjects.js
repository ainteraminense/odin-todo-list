export function allProjects() {
    let projects = [];

    const addProject = (project) => {
        projects.push(project);
    }

    const getAllProjects = () => {
        return projects;
    }

    return { addProject, getAllProjects }
}