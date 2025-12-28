const board = document.querySelector(".board");

const blockHeight = 80;
const blockWidth = 80;

const rows = Math.floor(board.clientHeight / blockHeight);
const columns = Math.floor(board.clientWidth / blockWidth);

const blocks = [];

const snake = [{ x: 0, y: 14 }];

let direction = "left";

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
    head = { x: item.x - 1, y: item.y };
  } else if (direction === "down") {
    head = { x: item.x + 1, y: item.y };
  }

  snake.forEach((item) => {
    blocks[`${item.x}-${item.y}`].classList.remove("snake");
  });

  snake.unshift(head);
  snake.pop();

  renderSnake();
}, 300);
