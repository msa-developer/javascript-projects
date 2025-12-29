const board = document.querySelector(".board");

const blockHeight = 80;
const blockWidth = 80;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);
let intervalId = null;
const blocks = [];
const snake = [{ x: 4, y: 14 }];
let direction = "left";
let food = [
  {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  },
];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.textContent = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

const renderSnake = () => {
  let head = null;

  if (direction === "left") {
    snake.forEach((item) => {
      head = { x: item.x, y: item.y - 1 };
    });
  } else if (direction === "right") {
    snake.forEach((item) => {
      head = { x: item.x, y: item.y + 1 };
    });
  } else if (direction === "up") {
    snake.forEach((item) => {
      head = { x: item.x - 1, y: item.y };
    });
  } else if (direction === "down") {
    snake.forEach((item) => {
      head = { x: item.x + 1, y: item.y };
    });
  }

  if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
    alert("Game Over");
  }

  food.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.add("food");
  });

  if (head.x === food.x || head.y === food.y) {
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

  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.remove("snake");
  });

  snake.unshift(head);
  snake.pop();

  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.add("snake");
  });
};

intervalId = setInterval(() => {
  renderSnake();
}, 300);

addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key === "ArrowDown") {
    direction = "down";
  } else if (e.key === "ArrowRight") {
    direction = "right";
  } else if (e.key === "ArrowLeft") {
    direction = "left";
  }
});
