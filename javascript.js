const initGridSize = 16;
const containerSize = 80;

let blackMultiplier = 1;

const container     = document.querySelector(".container");
const newBoardBtn   = document.querySelector(".new-board-btn");

container.style.width = containerSize + "vh";
container.style.height = containerSize + "vh";

newBoardBtn.addEventListener('click', () => newBoardBtnPress())

function createBoard(gridSize) {
    const containerStyle = window.getComputedStyle(container);
    const containerWidth = containerStyle.getPropertyValue("width").match(/\d+/);
    console.log(containerWidth);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = createBox(gridSize, containerWidth);
    
        const b = container.appendChild(box);
    }
}

function removeBoard() {
    container.innerHTML = "";
}

function createBox(gridSize, containerWidth) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.classList.add("unselectedBox");


    box.style.flex = "1 1 " + containerWidth / gridSize + "px" ; 

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = getRandomColor();
        blackMultiplier -= 0.1;
    });

    return box;
}

function newBoardBtnPress() {
    removeBoard();

    blackMultiplier = 1;

    let gridSize = prompt("Choose gird-size:");
    if(gridSize > 80) { gridSize = 80 };

    createBoard(gridSize);
}

function getRandomColor() {
    return "rgb(" + Math.floor((Math.random() * 100  + 155) * blackMultiplier) + "," +
                    Math.floor((Math.random() * 100  + 155) * blackMultiplier) + "," +
                    Math.floor((Math.random() * 100  + 155) * blackMultiplier) + ")"; 
}

createBoard(initGridSize);
console.log(getRandomColor());