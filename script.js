const container = document.querySelector(".container");
const size = 400;
let num = 16;
let borderEnabled = true;
let hoverColor = "black";
let clickmode = false;

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

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", () => {
    colorPicker.click();
    colorPicker.addEventListener("input", (e) => {
        hoverColor = e.target.value;
    });

});

const toggleMouse = document.querySelector(".click-mouse");
toggleMouse.addEventListener("click", () => {
    clickmode = !clickmode;
    toggleMouse.textContent = clickmode ? "CLICK" : "HOVER";
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

            square.addEventListener("click", () => {
                if (clickmode) {
                    square.style.backgroundColor = hoverColor;
                }
            });

            square.addEventListener("mouseover", () => {
                if (!clickmode) {
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
