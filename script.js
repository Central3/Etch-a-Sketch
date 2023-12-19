const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new");

function createGrid(rowsCols = 2) {
    for (let row = 0; row < rowsCols; row++) {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        for (let col = 0; col < rowsCols; col++) {
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newCol.appendChild(newCell);
        }
        container.appendChild(newCol);
    }
}

createGrid();

container.addEventListener("mouseover", (event) => {
    if (event.target.className === "cell") {
        event.target.classList.add("cell-hover");

        setTimeout(() => {
            event.target.classList.remove("cell-hover");
        }, 1000);
    }
});

newGridBtn.addEventListener("click", () => {
    const rowsCols = Number(prompt("Enter the size of the grid (2 - 100): "));

    if (typeof rowsCols === "number" && rowsCols >= 2 && rowsCols <= 100) {
        const cols = document.querySelectorAll(".col");
        cols.forEach((col) => {
            col.remove();
        });

        createGrid(rowsCols);
    }
});
