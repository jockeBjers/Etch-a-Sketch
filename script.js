const container = document.querySelector(".container");


// box.setAttribute("style", "width: 16px; height: 16px; background: blue;")
const size = 600;
let num = 16;


const button = document.querySelector("button");
button.addEventListener("click", () => {
    num = prompt('Enter number of squares, maximun 100');
    if (num <= 0 || num > 100) return;
   removeBoard();
   createBoxes(num);
});

 function createBoxes(num) {
    const pixelSize = 400 / num;
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
        }
        container.append(div);
    }
}

const removeBoard = () => {
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  };

createBoxes(16);

// function createGrid(num){

//     let square = document.createElement("div");
//     square.setAttribute("style", "width: 10; height: 10; border: 2px solid black;");
    


//  for (let i = 0; i < num; i++)
//     square = num;
    

//     container.appendChild(square);
// }



// createGrid(16);