const board = document.querySelector(".board");

const blockHeight = 80;
const blockWidth = 80;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);
const blocks = [];
const snake = [{ x: 5, y: 12 }];
let intervalId = null;
let direction = "left";
const food = [
  { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) },
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
  let head = null;

  food.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.add("food");
  });

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  if (head.x === food.x) {
    food.forEach((item) => {
      blocks[`${item.x}-${item.y}`].classList.remove("food");
    });
    food = [
      {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols),
      },
    ];
  }

  if (head.x < 0 || head.y < 0 || head.x >= cols || head.y >= rows) {
    alert("Game Over");
    clearInterval(intervalId);
  }

  snake.unshift(head);
  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.remove("snake");
  });
  snake.pop();

  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.add("snake");
  });
};

intervalId = setInterval(() => {
  renderSnake();
}, 300);

addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "h") {
    direction = "left";
  } else if (e.key === "ArrowRight" || e.key === "l") {
    direction = "right";
  } else if (e.key === "ArrowUp" || e.key === "k") {
    direction = "up";
  } else if (e.key === "ArrowDown" || e.key === "j") {
    direction = "down";
  }
});
