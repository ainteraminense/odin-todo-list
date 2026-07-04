export class Project {
    constructor(name = "My Project") {
        this.name = name;
        this.toDoList = [];
    }

    get toDos() {
        return this.toDoList;
    }

    set toDos(toDo) {
        this.toDoList.push(toDo);
    }
}