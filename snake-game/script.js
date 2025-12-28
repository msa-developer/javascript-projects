const board = document.querySelector(".board");

const blockHeight = 80;
const blockWidth = 80;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
const blocks = [];
let direction = "left";
const snake = [
  {
    x: 0,
    y: 15,
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
    blocks[`${item.x}-${item.y}`].classList.add("fill");
  });
};

setInterval(() => {
  let head = null;

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();

  if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
    alert("Game Over");
  }

  renderSnake();
}, 400);

addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key === "ArrowDown") {
    direction = "down";
  } else if (e.key === "ArrowLeft") {
    direction = "left";
  } else if (e.key === "ArrowRight") {
    direction = "right";
  }
});
