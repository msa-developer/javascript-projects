const board = document.querySelector(".board");

const blockHeight = 80;
const blockWidth = 80;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
const blocks = [];
let direction = "left";
const snake = [
  {
    x: 1,
    y: 3,
  },
  {
    x: 1,
    y: 4,
  },
  {
    x: 1,
    y: 5,
  },
];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

const renderSnake = () => {
  snake.forEach((item) => {
    console.log(blocks[`${item.x}-${item.y}`].classList.add("fill"));
  });
};

setInterval(() => {
  let snakeHead = null;
  if (direction === "left") {
  }
  renderSnake();
}, 300);
