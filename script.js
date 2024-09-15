const gridSize = 400;
let num = 16;
let isBorderVisible = true;
let hoverColor = "black";
let isMouseDown = false;

const container = document.querySelector(".container");
const borderButton = document.querySelector(".border");
const resetGrid = document.querySelector(".reset");
const input = document.getElementById("input");
const changeGrid = document.querySelector(".change-grid");

// changing grid size depending on input
changeGrid.addEventListener("click", () => {
    num = parseInt(input.value);
    if (num <= 0 || num > 100) return;
    removeBoxes();
    generateGrid(num);
});

resetGrid.addEventListener("click", () => {
    removeBoxes();
    generateGrid(16);
});
// Initializing the pickr library
const colorPicker = Pickr.create({
    el: '#color-picker-container',
    theme: 'classic',
    default: '#000000',
    components: {
        hue: true,
        inline: true,
    }
});

colorPicker.show();

colorPicker.on('hide', (instance) => {
    instance.show();
});

colorPicker.on('change', (color) => {
    hoverColor = color.toHEXA().toString();
});

// tracking mouse action
document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isMouseDown = true;
    }
});

document.addEventListener("mouseup", (e) => {
    if (e.button === 0) {
        isMouseDown = false;
    }
});

//Toggle border on / off 
borderButton.addEventListener("click", () => {
    isBorderVisible = !isBorderVisible;
    document.querySelectorAll(".box").forEach(square => {
        square.classList.toggle('no-border', !isBorderVisible);
    });
});

//creating a grid of boxes
function generateGrid(num) {
    const pixelSize = gridSize / num;

    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < num; j++) {
            let square = document.createElement("div");
            square.classList.add("box");
            square.style.width = `${pixelSize}px`;
            square.style.height = `${pixelSize}px`;


            // Change color on press
            square.addEventListener("mousedown", () => {
                square.style.backgroundColor = hoverColor;
            });

            // Change color on mouseover when mouse button is held down
            square.addEventListener("mouseover", () => {
                if (isMouseDown) {
                    square.style.backgroundColor = hoverColor;
                }
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

const removeBoxes = () => {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
};


//Initialize with a default grid of 16x16
generateGrid(16);
