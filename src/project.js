export function createProject(name = "My Project") {
    const id = self.crypto.randomUUID();
    const toDoList = [];

    const getId = () => id;
    const getToDos = () => toDoList;

    const addToDo= (toDo) => {
        toDoList.push(toDo);
    }

    return { name, getId, getToDos, addToDo }
}