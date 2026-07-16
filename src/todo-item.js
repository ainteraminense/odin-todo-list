export function createToDoItem(title, description, dueDate, priority, notes = "", projectId) {
    
    const toDoId = self.crypto.randomUUID();

    let isDone = false;
    const getStatus = () => isDone;
    const changeStatus = () => isDone = isDone === false ? true : false; 


    return { title, description, dueDate, priority, getStatus, changeStatus, toDoId }
}