const container = document.getElementById("container");



function createGrid(gridSize = 7) {
    let gridArea = gridSize * gridSize;
    // https://mozilladevelopers.github.io/playground/css-grid/04-fr-unit
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
                            grid-template-rows: repeat(${gridSize}, 1fr)`;
    //container.innerHTML = "";
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
            if(color === 'rainbow') {
                e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`
            }
            e.target.style.backgroundColor = color;
        })
    );
}


createGrid();
