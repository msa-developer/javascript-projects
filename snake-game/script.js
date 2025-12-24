const board = document.querySelector(".board");

const rowHeight = 80;
const columnWidth = 80;

const rows = Math.floor(board.clientHeight / rowHeight);
const columns = Math.floor(board.clientWidth / columnWidth);
const blocks = [];
const snakeArr = [
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

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
  snakeArr.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.add("snake");
  });
};
