const board = document.querySelector(".board");
const Score = document.querySelector(".score");
const Time = document.querySelector(".time");
const highScore = document.querySelector(".high-score");
const startGame = document.querySelector(".start-btn");
const Modal = document.querySelector(".modal");
const restartGame = document.querySelector(".restart-btn");

const blocks = [];
const blockHeight = 80;
const blockWidth = 80;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

let time = `00:00`;
let hs = localStorage.getItem("highScore") || 0;
let score = 0;
let snake = [{ x: 6, y: 19 }];
let gameStartInterval = null;
let direction = "left";
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

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

  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
    clearInterval(gameStartInterval);
    Modal.style.display = "grid";
    startGame.style.display = "none";
    restartGame.style.display = "block";
    restartGame.removeEventListener("click", restartFunc);
    restartGame.addEventListener("click", restartFunc);
    return;
  }

  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.push(head);
    score += 10;
    Score.innerText = score;
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

startGame.addEventListener("click", () => {
  Modal.style.display = "none";
  startGame.style.display = "none";
  gameStartInterval = setInterval(() => {
    renderSnake();
  }, 300);
});

const restartFunc = () => {
  if (score > hs) {
    hs = score;
    localStorage.setItem("highScore", score);
    highScore.innerText = hs;
  }
  score = 0;
  Score.innerText = 0;
  Modal.style.display = "none";
  restartGame.style.display = "none";

  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.remove("snake");
  });
  snake = [{ x: 6, y: 19 }];
  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.add("snake");
  });

  blocks[`${food.x}-${food.y}`].classList.remove("food");
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  blocks[`${food.x}-${food.y}`].classList.add("food");

  gameStartInterval = setInterval(() => {
    renderSnake();
  }, 300);
};

document.addEventListener("keydown", (e) => {
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
