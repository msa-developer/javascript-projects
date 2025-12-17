const board = document.querySelector(".board");
const blockHeight = 20;
const blockWidth = 20;
const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

for (let i = 0; i < rows * cols; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  board.appendChild(block);
}
