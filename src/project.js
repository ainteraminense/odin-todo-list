export function createProject(name = "My Project", isActive = true) {
    const projectId = self.crypto.randomUUID();
    const toDoList = [];

    const getToDos = () => toDoList;

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

    return { projectId, name, isActive, getToDos, addToDo}
}