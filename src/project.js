export function createProject(name = "My Project") {
    const id = self.crypto.randomUUID();
    const toDoList = [];

    const getToDos = () => {
        return toDoList;
    }

    const addToDo= (toDo) => {
        toDoList.push(toDo);
    }

    return { name, getToDos, addToDo }
}