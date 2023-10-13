const initGridSize = 16;
const containerSize = 200;

const container     = document.querySelector(".container");
const newBoardBtn   = document.querySelector(".new-board-btn");

container.style.width = containerSize + "px";
container.style.height = containerSize + "px";

newBoardBtn.addEventListener('click', () => newBoardBtnPress())


function createBoard(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = createBox(gridSize);
    
        const b = container.appendChild(box);
    }
}

function removeBoard() {
    container.innerHTML = "";
}

function createBox(gridSize) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.classList.add("unselectedBox");

    box.style.flex = "1 1 " + containerSize / gridSize + "px" ; 

    box.addEventListener("mouseover", () => box.classList.add("selected-box"));

    return box;
}



function newBoardBtnPress() {
    removeBoard();

    const gridSize = prompt("Choose gird-size:");

    createBoard(gridSize);
}

createBoard(initGridSize);