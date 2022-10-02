const container = document.getElementById("container");

function Erase(color = "white", effect = "mouseover") {
    divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) =>
        div.addEventListener(effect, (e) => {
            e.target.style.backgroundColor = color;
        })
    );
}

function ColorPicker() {
    let MyColor = document.getElementById("MyColor").value;
    color = MyColor;
    return colorGrid(color);
}

function Rainbow() {
    color = "rainbow";
    return colorGrid(color);
}

function Clear() {
    return createGrid();
}

function TableSize() {
    gridSize = window.prompt("Enter the size of a side");
    createGrid(gridSize);
}

function createGrid(gridSize = 10) {
    let gridArea = gridSize ** 2;
    // https://mozilladevelopers.github.io/playground/css-grid/04-fr-unit
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
                            grid-template-rows: repeat(${gridSize}, 1fr)`;
    container.innerHTML = "";
    for (i = 1; i <= gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
    colorGrid();
}

function colorGrid(color = "black", effect = "mouseover") {
    let divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) =>
        div.addEventListener(effect, (e) => {
            if (color === "rainbow") {
                e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`
            }
            e.target.style.backgroundColor = color;
        })
    );
}


createGrid();
