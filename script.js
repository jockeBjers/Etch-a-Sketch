const container = document.querySelector(".container");
const size = 400;
let num = 16;
let borderEnabled = true;
let hoverColor = "black";
let clickmode = false;
let isMouseDown = false; 

const colorPicker = document.getElementById("colorPicker");
const input = document.getElementById("input");

const changeGrid = document.querySelector(".change-grid");
changeGrid.addEventListener("click", () => {
    num = parseInt(input.value);
    if (num <= 0 || num > 100) return;
    removeBoxes();
    createBoxes(num);
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    removeBoxes();
    createBoxes(16);
});

const pickr = Pickr.create({
    el: '#color-picker-container',
    theme: 'classic', 
    default: '#000000', 
    components: {   
        opacity: true,
        hue: true,
        inline: true,
        interaction: {
        }
    }
});

pickr.show();

pickr.on('hide', (instance) => {
    instance.show(); 
});

pickr.on('change', (color) => {
    hoverColor = color.toHEXA().toString();  
});

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
const borderButton = document.querySelector(".border");
borderButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        if (borderEnabled) {
            square.style.border = 'none';
        } else {
            square.style.border = '1px solid #dd976f';
        }
    });
    borderEnabled = !borderEnabled;
});

function createBoxes(num) {
    const pixelSize = size / num;
    
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.classList.add("div");

        for (let j = 0; j < num; j++) {
            let square = document.createElement("div");
            square.setAttribute("class", "box");
            square.setAttribute("style", `background-color: #e9cebe;
                width:${pixelSize}px; height:${pixelSize}px; 
                box-sizing: border-box; border: 1px solid #dd976f`);
            div.append(square);

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
        }
        container.append(div);
    }
}

const removeBoxes = () => {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
};

createBoxes(16);
