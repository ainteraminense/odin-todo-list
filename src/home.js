

export function home() {
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
}