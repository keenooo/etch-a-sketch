let gridSize = 16;
const containerSize = 80;
let boxes = [];

let blackMultiplier = 1;

const container     = document.querySelector(".container");
const newBoardBtn   = document.querySelector(".new-board-btn");

container.style.width = containerSize + "vh";
container.style.height = containerSize + "vh";

container.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target.classList.contains("box")) {
        target.style.backgroundColor = getRandomColor();
        blackMultiplier -= 0.1;
    }
});

newBoardBtn.addEventListener('click', () => newBoardBtnPress())

window.addEventListener('resize', () => updateBoxSizes()); 

createBoard(gridSize);

function createBoard() {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = createBox();
        fragment.appendChild(box);
        boxes.push(box);
    }
    container.appendChild(fragment);
    updateBoxSizes();
}

function removeBoard() {
    boxes = [];
    container.innerHTML = "";
}

function createBox() {
    const box = document.createElement('div');
    box.classList.add("box");
    box.classList.add("unselectedBox");
    return box;
}

function updateBoxSizes() {
    const boxSize = getContainerWidth() / gridSize;
    boxes.forEach(box => box.style.flex = `1 1 ${boxSize}px`);
}

function newBoardBtnPress() {
    removeBoard();

    blackMultiplier = 1;

    gridSize = prompt("Choose gird-size:", "16");
    if(gridSize > 100) { gridSize = 100 };

    createBoard(gridSize);
}

function getRandomColor() {
    return "rgb(" + Math.floor((Math.random() * 100  + 155) * blackMultiplier) + "," +
                    Math.floor((Math.random() * 100  + 155) * blackMultiplier) + "," +
                    Math.floor((Math.random() * 100  + 155) * blackMultiplier) + ")"; 
}

function getContainerWidth() {
    const containerStyle = window.getComputedStyle(container);
    return containerStyle.getPropertyValue("width").match(/\d+/);
}