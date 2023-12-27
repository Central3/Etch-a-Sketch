const grid = document.querySelector(".grid");
const newGridBtn = document.querySelector(".new");
const toggleGridBtn = document.querySelector(".toggle-grid-btn");
const blackColorBtn = document.querySelector(".black-color");
const randomColorBtn = document.querySelector(".random-color");
const eraseBtn = document.querySelector(".erase");

let mousePressed = false;
let penColor = "default";

document.addEventListener("mousedown", () => mousePressed = true);
document.addEventListener("mouseup", () => (mousePressed = false));

blackColorBtn.addEventListener("click", () => {
    penColor = "default";

    blackColorBtn.classList.add("active");
    randomColorBtn.classList.remove("active");
    eraseBtn.classList.remove("active");
});

randomColorBtn.addEventListener("click", () => {
    penColor = "random";

    blackColorBtn.classList.remove("active");
    randomColorBtn.classList.add("active");
    eraseBtn.classList.remove("active");
});

eraseBtn.addEventListener("click", () => {
    penColor = "erase";

    blackColorBtn.classList.remove("active");
    randomColorBtn.classList.remove("active");
    eraseBtn.classList.add("active");
});

function createGrid(rowsCols = 16) {
    for (let row = 0; row < rowsCols; row++) {
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        for (let col = 0; col < rowsCols; col++) {
            const newCell = document.createElement("div");
            newCell.classList.add("cell");

            newCell.addEventListener("mousedown", draw);
            newCell.addEventListener("mouseover", draw);

            newCol.appendChild(newCell);
        }
        grid.appendChild(newCol);
    }
}

createGrid();

function draw(event) {
    if (mousePressed || event.type === "mousedown") {
        if (penColor === "default") {
            event.target.style.backgroundColor = "#444";
        } else if (penColor === "random") {
            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        } else {
            event.target.style.backgroundColor = "white";
        }
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

    Array.from(grid.children).forEach((col) => {
        Array.from(col.children).forEach((cell) => {
            cell.classList.toggle("cell__border");
        });
    });
});
