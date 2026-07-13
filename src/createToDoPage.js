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
    const labelText = document.createTextNode("ToDo Title");
    titleLabel.appendChild(labelText);
    titleLabel.setAttribute("for", "title");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    
    // Form buttons
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("commandfor", "ToDo-dialog");
    closeBtn.setAttribute("command", "close");
    const closeBtnText = document.createTextNode("Cancel");
    closeBtn.appendChild(closeBtnText);
    // const addBtn = document.createElement("button");
    // const addBtnText = document.createTextNode("Add New Project");
    // addBtn.appendChild(addBtnText);
    // const projectsFactory = allProjects();
    // addBtn.addEventListener("click", (event) => {
    //     console.log("New project added");
    //     const newProj = createProject(nameInput.value);
    //     console.log(newProj.name);
    //     projectsFactory.addProject(newProj);
    //     dialog.close();
    //     window.location.reload();
    //     event.preventDefault();
    // });
    form.appendChild(h2);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    // form.appendChild(closeBtn);
    // form.appendChild(addBtn);
    dialog.appendChild(form);
    dialog.appendChild(closeBtn);

    // Show dialog
    const main = document.querySelector("#main");
    main.appendChild(dialog);
}