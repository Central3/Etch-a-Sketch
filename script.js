const container = document.querySelector(".container");

function createGrid(rows = 16, cols = 16) {
    for (let row = 0; row < rows; row++) {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        for (let col = 0; col < cols; col++) {
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newCol.appendChild(newCell);
        }
        container.appendChild(newCol);
    }
}

createGrid();
