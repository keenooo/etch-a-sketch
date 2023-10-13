const gridSize = 16;

const container = document.querySelector(".container");

let boxes = [];

for (let i = 0; i < gridSize * gridSize; i++) {
    const box = createBox();

    const b = container.appendChild(box);

    boxes.push(b);
}

function createBox() {
    const box = document.createElement('div');
    box.classList.add("box");
    box.classList.add("unselectedBox");

    box.addEventListener("mouseover", () => box.classList.add("selectedBox"));
    box.addEventListener("mouseout", () => box.classList.remove("selectedBox"));

    return box;
}