const initGridSize = 16;
const containerSize = 80;

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

    box.addEventListener("mouseover", () => box.classList.add("selected-box"));

    return box;
}

function newBoardBtnPress() {
    removeBoard();

    const gridSize = prompt("Choose gird-size:");

    createBoard(gridSize);
}

createBoard(initGridSize);