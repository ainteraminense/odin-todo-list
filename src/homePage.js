import { allProjects } from "./allProjects.js";
import { openCreateNewProj } from "./createProjPage.js";
import { openCreateNewToDo } from "./createToDoPage.js";

export function home() {
    let activeProject = null;
    const main = document.querySelector("#main");
    const containerChild = document.createElement("div");
    containerChild.classList.add("container-child");
    
    // Initialize default proj
    const projectsFactory = allProjects();
    if(projectsFactory.getAllProjects().length == 0) {
        projectsFactory.initializeDefaultProj();
    }
    const projects = projectsFactory.getAllProjects();

    const createHomePageTopSection = () => {
        // Getting top part of page
        const h1 = document.createElement("h1");
        h1.textContent = "View All Projects";
        const addProjBtn = document.createElement("button");
        addProjBtn.textContent = "Create Project";
        addProjBtn.setAttribute("command", "show-modal");
        addProjBtn.setAttribute("commandfor", "my-dialog");
        addProjBtn.addEventListener("click", openCreateNewProj);

        const projContainer = document.createElement("div");
        projContainer.classList.add("container");

        projContainer.appendChild(h1);
        projContainer.appendChild(addProjBtn);
        main.appendChild(projContainer);
    }


    const refreshProjects = () => {

        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const thName = document.createElement("th");
        thName.setAttribute("scope", "col");
        const thEmpty = document.createElement("th");
        thEmpty.setAttribute("scope", "col");
        thName.textContent += "Project Name";
        const tbody = document.createElement("tbody");
        // Render the projects
        projects.forEach((proj) => {
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
        });
        // table
            table.appendChild(thead);
            table.appendChild(tbody);
            containerChild.appendChild(table);
            main.appendChild(containerChild);
            
    }

    const showDetails = () => {
        activeProject = projectsFactory.getCurrentProject();
        console.log(`Project id is ${activeProject.projectId}`);
        const tdName = activeProject;
        const asideTable = document.createElement("table");
        asideTable.classList.add("aside-table");
        const tableCaption = document.createElement("legend");
        const tableCaptionText = document.createTextNode(`All ToDos for ${activeProject.name}`);
        tableCaption.appendChild(tableCaptionText);

        const containerDetails = document.createElement("div");
        const addToDoBtn = document.createElement("button");
        const addToDoBtnText = document.createTextNode("Add ToDo");
        addToDoBtn.appendChild(addToDoBtnText);
        addToDoBtn.setAttribute("command", "show-modal");
        addToDoBtn.setAttribute("commandfor", "ToDo-dialog");
        addToDoBtn.addEventListener("click", openCreateNewToDo);
        
        // const tr = document.createElement("tr");
        // const thName = document.createElement("th");
        // thName.setAttribute("scope", "row");
        

        asideTable.appendChild(tableCaption);
        containerDetails.appendChild(addToDoBtn);
        containerDetails.appendChild(asideTable);

        containerChild.appendChild(containerDetails);

        main.appendChild(containerChild);
    }

    return { createHomePageTopSection, refreshProjects, showDetails}
}