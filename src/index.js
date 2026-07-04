import "./styles.css"
import { TodoItem } from "./todo-item.js"
import { Project } from "./project.js"

let project = new Project();
let toDo = new TodoItem("Laundry", "Wash Clothes", new Date(2026, 3, 8), "Low");

project.toDos = toDo;
console.log(project.name);
console.log(project.toDos);
