import { createProject } from "./project.js";

export function OpenCreateNewProjPage(name) {
    console.log("Open create new proj page");
    const dialog = document.createElement("dialog");
    dialog.setAttribute("id", "my-dialog");
    const p = document.createElement("p");
    const pText = document.createTextNode("This dialog was opened using an invoker command.");
    p.appendChild(pText);
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("commandfor", "my-dialog");
    closeBtn.setAttribute("command", "close");
    const closeBtnText = document.createTextNode("Close");
    closeBtn.appendChild(closeBtnText);
    dialog.appendChild(p);
    dialog.appendChild(closeBtn);
    const main = document.querySelector("#main");
    main.appendChild(dialog);
}