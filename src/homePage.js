import { allProjects } from "./allProjects.js";
import { OpenCreateNewProjPage } from "./createProjPage.js";

export function Home() {
    CreateHomePageTopSeciton();
    
    // Initialize default proj
    const projectsFactory = allProjects();
    if(projectsFactory.getAllProjects() == null) {
        projectsFactory.initializeDefaultProj();
    }
    const projects = projectsFactory.getAllProjects();
   
    RefreshProjects(projects);
}

function CreateHomePageTopSeciton() {
    // Getting top part of page
    const main = document.querySelector("#main");
    const h1 = document.createElement("h1");
    h1.textContent = "View All Projects";
    const addProjBtn = document.createElement("button");
    addProjBtn.textContent = "Create Project";
    addProjBtn.setAttribute("command", "show-modal");
    addProjBtn.setAttribute("commandfor", "my-dialog");
    addProjBtn.addEventListener("click", OpenCreateNewProjPage);

    const projContainer = document.createElement("div");
    projContainer.classList.add("container");

    projContainer.appendChild(h1);
    projContainer.appendChild(addProjBtn);
    main.appendChild(projContainer);
}

export function RefreshProjects(projects) {
    const table = document.createElement("table");
    // Render the projects
    projects.forEach((proj) => {
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const thName = document.createElement("th");
        thName.setAttribute("scope", "col");
        const thEmpty = document.createElement("th");
        thEmpty.setAttribute("scope", "col");
        thName.textContent += "Project Name";
        const tbody = document.createElement("tbody");
        const trBody = document.createElement("tr");
        const tdName = document.createElement("td");
        const projName = document.createTextNode(proj.name)

        tdName.appendChild(projName);
        const btnView = document.createElement("button");
        const btnText = document.createTextNode("View")
        btnView.appendChild(btnText);
        // head
        tr.appendChild(thName);
        tr.appendChild(thEmpty);
        thead.appendChild(tr);
        // body
        trBody.appendChild(tdName);
        trBody.appendChild(btnView);
        tbody.appendChild(trBody);
        // table
        table.appendChild(thead);
        table.appendChild(tbody);

        //console.log(proj.name);
        main.appendChild(table);
    });
}