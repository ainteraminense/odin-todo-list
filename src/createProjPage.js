import { createProject } from "./project.js";
import { allProjects } from "./allProjects.js";

export function openCreateNewProj() {
  console.log("Open create new project page");
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "my-dialog");

  // Set up form
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  const h2Text = document.createTextNode("Add a New Project");
  h2.appendChild(h2Text);
  const nameLabel = document.createElement("label");
  const labelText = document.createTextNode("Project Name");
  nameLabel.appendChild(labelText);
  nameLabel.setAttribute("for", "project-name");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "project-name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");

  // Form buttons
  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("commandfor", "my-dialog");
  closeBtn.setAttribute("command", "close");
  const closeBtnText = document.createTextNode("Cancel");
  closeBtn.appendChild(closeBtnText);
  const addBtn = document.createElement("button");
  const addBtnText = document.createTextNode("Add New Project");
  addBtn.appendChild(addBtnText);
  const projectsFactory = allProjects();
  addBtn.addEventListener("click", (event) => {
    console.log("New project added");
    const newProj = createProject(nameInput.value);
    console.log("Deactivating previous...");
    projectsFactory.deActivateProjects();
    projectsFactory.addProject(newProj);
    //console.log(projectsFactory);
    dialog.close();
    window.location.reload();
    event.preventDefault();
  });
  form.appendChild(h2);
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(closeBtn);
  form.appendChild(addBtn);
  dialog.appendChild(form);
  dialog.appendChild(closeBtn);

  // Show dialog
  const main = document.querySelector("#main");
  main.appendChild(dialog);
}
