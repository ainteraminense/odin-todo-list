export function createProject(name = "My Project", isActive = true) {
    const id = self.crypto.randomUUID();
    const toDoList = [];

    const getId = () => id;
    const getToDos = () => toDoList;

    const addToDo= (toDo) => {
        toDoList.push(toDo);
    }

    return { name, isActive, getId, getToDos, addToDo}
}