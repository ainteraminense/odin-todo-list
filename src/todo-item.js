export function createToDoItem(title, description, dueDate, priority, notes = "") {
    
    const id = self.crypto.randomUUID();
    //const getID = () => id;

    let isDone = false;
    const getStatus = () => isDone;
    const changeStatus = () => isDone = isDone === false ? true : false; 

    return { title, description, dueDate, priority, getStatus, changeStatus }
}