const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new");
const toggleGridBtn = document.querySelector(".toggle-grid-btn");

let mousePressed = false;

document.addEventListener("mousedown", () => (mousePressed = true));
document.addEventListener("mouseup", () => (mousePressed = false));

function createGrid(rowsCols = 16) {
    for (let row = 0; row < rowsCols; row++) {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        for (let col = 0; col < rowsCols; col++) {
            const newCell = document.createElement("div");
            newCell.classList.add("cell");

            newCell.addEventListener("mouseover", draw);
            newCell.addEventListener("mousedown", draw);

            newCol.appendChild(newCell);
        }
        container.appendChild(newCol);
    }
}

createGrid();

function draw(event) {
    if (mousePressed || event.type === "mousedown") {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }
}

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
