export function createProject(name = "My Project") {
    const id = self.crypto.randomUUID();
    const toDoList = [];

    const getId = () => id;
    const getToDos = () => toDoList;

    const addToDo= (toDo) => {
        toDoList.push(toDo);
    }
    const isActive = false;

    //const getActive = () => isActive;

    //const switchActive = () => isActive = isActive ? true : false;

    return { name, getId, getToDos, addToDo }
}