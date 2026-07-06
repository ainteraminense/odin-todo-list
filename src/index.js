import "./styles.css"
import { createToDoItem } from "./todo-item.js"
import { createProject } from "./project.js"
import { allProjects } from "./allProjects.js"
 
// Testing
const projects = allProjects();

const defaultProject = createProject();
const secondProject = createProject("My second project");

projects.addProject(defaultProject);
projects.addProject(secondProject);

const toDo1 = createToDoItem("Laundry", "Wash Clothes", new Date(2026, 10, 3), "High");

defaultProject.addToDo(toDo1);

console.log(projects.getAllProjects());
projects.getAllProjects().forEach(project => {
    console.log(project.getToDos());
});


