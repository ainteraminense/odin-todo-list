import { createProject } from "./project.js";
import { allProjects } from "./allProjects.js";
import { createToDoItem } from "./todo-item.js"

export function openCreateNewToDo(name) {
    console.log("Open create new ToDo");
    const dialog = document.createElement("dialog");
    dialog.setAttribute("id", "ToDo-dialog");
    
    // Set up form
    // title, description, dueDate, priority, notes = ""
    const form = document.createElement("form");
    const h2 = document.createElement("h2");
    const h2Text = document.createTextNode("Add a New ToDo");
    h2.appendChild(h2Text);
    const titleLabel = document.createElement("label");
    const labelText = document.createTextNode("ToDo Title:");
    titleLabel.appendChild(labelText);
    titleLabel.setAttribute("for", "title");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    const descriptionLabelText = document.createTextNode("Description:");
    descriptionLabel.appendChild(descriptionLabelText); 
    const description = document.createElement("textarea");
    description.setAttribute("id", "description");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    const dueDateLabelText = document.createTextNode("Due Date:");
    dueDateLabel.appendChild(dueDateLabelText);
    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("id", "dueDate");
    const priorityLabel = document.createElement("label");
    const priorityLabelText = document.createTextNode("Priority:");
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority");
    const priorityOption1 = document.createElement("option");
    const priorityOption1Text = document.createTextNode("Low");
    priorityOption1.setAttribute("value", "low");
    const priorityOption2 = document.createElement("option");
    const priorityOption2Text = document.createTextNode("Medium");
    priorityOption2.setAttribute("value", "medium");
    const priorityOption3 = document.createElement("option");
    const priorityOption3Text = document.createTextNode("High");
    priorityOption3.setAttribute("value", "high");
    priorityLabel.appendChild(priorityLabelText);
    priorityOption1.appendChild(priorityOption1Text);
    priorityOption2.appendChild(priorityOption2Text);
    priorityOption3.appendChild(priorityOption3Text);
    prioritySelect.appendChild(priorityOption1);
    prioritySelect.appendChild(priorityOption2);
    prioritySelect.appendChild(priorityOption3);
    const formRow1 = document.createElement("div");
    formRow1.classList.add("form-row");
    const formRow2 = document.createElement("div");
    formRow2.classList.add("form-row");
    const formRow3 = document.createElement("div");
    formRow3.classList.add("form-row");
    const formRow4 = document.createElement("div");
    formRow4.classList.add("form-row");
    const formButtonsRow = document.createElement("div");
    formButtonsRow.classList.add("form-btn-row");
    // Form buttons
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("commandfor", "ToDo-dialog");
    closeBtn.setAttribute("command", "close");
    const closeBtnText = document.createTextNode("Cancel");
    closeBtn.appendChild(closeBtnText);
    const addBtn = document.createElement("button");
    const addBtnText = document.createTextNode("Add New ToDo");
    addBtn.appendChild(addBtnText);
    const projectsFactory = allProjects();
    const currentProject = projectsFactory.getCurrentProject();
    console.log(`current project is ${currentProject.projectId}`);
    //title, description, dueDate, priority
    addBtn.addEventListener("click", (event) => {
    const toDo = createToDoItem(titleInput.value, description.value, dueDate.value, "low", currentProject.projectId);
    console.log(toDo);
    currentProject.addToDo(toDo);
    console.log("New ToDo added");
    dialog.close();
    // window.location.reload();
    event.preventDefault();
    });
    form.appendChild(h2);
    formRow1.appendChild(titleLabel);
    formRow1.appendChild(titleInput);
    form.appendChild(formRow1);
    formRow2.appendChild(descriptionLabel);
    formRow2.appendChild(description);
    form.appendChild(formRow2);
    formRow3.appendChild(dueDateLabel);
    formRow3.appendChild(dueDate);
    form.appendChild(formRow3);
    formRow4.appendChild(priorityLabel);
    formRow4.appendChild(prioritySelect);
    form.appendChild(formRow4);
    formButtonsRow.appendChild(addBtn);
    form.appendChild(formButtonsRow);
    dialog.appendChild(form);
    dialog.appendChild(closeBtn);

    // Show dialog
    const main = document.querySelector("#main");
    main.appendChild(dialog);
}