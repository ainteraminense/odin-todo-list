import { createToDoItem } from "./todo-item.js";

export function createProject(name = "My Project", isActive = true, projectId = self.crypto.randomUUID()) {
    const toDoList = getToDoFromDB() ? getConvertedToDosFromDB() : [];
    const getToDos = () => toDoList.forEach((todo) => console.log(todo));

    const addToDo = (toDo) => {
        toDoList.push(toDo);
        console.log("saving...");
        console.log(toDoList);
        saveToDoToDatabase();
    } 

    function saveToDoToDatabase() {
        localStorage.setItem("todo", JSON.stringify(toDoList));
    }

    function getToDoFromDB() {
        return JSON.parse(localStorage.getItem("todo"));
    }

    function getConvertedToDosFromDB() {
        const convertedToDos = [];
        let key = localStorage.key(1);
        const unconvertedToDos = JSON.parse(localStorage.getItem(key));
        unconvertedToDos.forEach(unconvertedToDos => {
            if (unconvertedToDos.projectId != projectId) return;
            //title, description, dueDate, priority, notes = "", projectId
            const convertedToDo = createToDoItem(unconvertedToDos.title, unconvertedToDos.description, unconvertedToDos.dueDate, unconvertedToDos.priority, unconvertedToDos.projectId);
            convertedToDos.push(convertedToDo);
        });
        return convertedToDos;
    };

    return { projectId, name, isActive, getToDos, addToDo}
}