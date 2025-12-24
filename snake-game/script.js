const board = document.querySelector(".board");

const blockHeight = 80;
const blockWidth = 80;
const snake = [
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 0, y: 3 },
];

const rows = Math.floor(board.clientWidth / blockWidth);
const columns = Math.floor(board.clientHeight / blockHeight);
const blocks = [];

for (let row = 0; row < rows; row++) {
  for (let column = 0; column < columns; column++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${row}-${column}`;
    blocks[`${row}-${column}`] = block;
  }
}

const renderSnake = () => {
  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.add("snake");
  });
};

setInterval(() => {
  renderSnake();
}, 300);
