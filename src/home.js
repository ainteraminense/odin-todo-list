import { allProjects } from "./allProjects.js"

export function home() {
    // Getting top part of page
    const main = document.querySelector("#main");
    const h1 = document.createElement("h1");
    h1.textContent = "View All Projects";
    const addBtn = document.createElement("button");
    const projContainer = document.createElement("div");
    projContainer.classList.add("container");
    addBtn.textContent = "Create Project";
    projContainer.appendChild(h1);
    projContainer.appendChild(addBtn);
    main.appendChild(projContainer);

    const table = document.createElement("table");

    const projectsFactory = allProjects();
    const projects = projectsFactory.initializeDefaultProj();

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

    // projects.forEach((proj) => {
    //     console.log(proj.name);
    // });
}