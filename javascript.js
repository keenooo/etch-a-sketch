const gridSize = 16;

const container = document.querySelector(".container");

let boxes = [];

for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.classList.add("unselectedBox");

    const b = container.appendChild(box);

    boxes.push(b);
}