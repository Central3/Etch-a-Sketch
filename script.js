const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new");
const toggleGridBtn = document.querySelector(".toggle-grid-btn");

let mousePressed = false;

function createGrid(rowsCols = 16) {
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

container.addEventListener("mousedown", () => (mousePressed = true));
container.addEventListener("mouseup", () => (mousePressed = false));
container.addEventListener("mouseleave", () => (mousePressed = false));

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
        event.target.classList.add("cell-hover");
    }
});
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cell") && mousePressed) {
        event.target.classList.add("cell-hover");
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

toggleGridBtn.addEventListener("click", () => {
    toggleGridBtn.textContent =
        toggleGridBtn.textContent === "Show Grid" ? "Hide Grid" : "Show Grid";

    Array.from(container.children).forEach((col) => {
        Array.from(col.children).forEach((cell) => {
            cell.classList.toggle("cell__border");
        });
    });
});
