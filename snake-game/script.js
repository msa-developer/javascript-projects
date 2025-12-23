const board = document.querySelector(".board");

const blockHeight = 50;
const blockWidth = 50;

const rows = Math.floor(board.clientHeight / blockHeight);
const columns = Math.floor(board.clientWidth / blockWidth);

for (let row = 0; row < rows; row++) {
  for (let column = 0; column < columns; column++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.textContent = `( ${row},${column} )`;
  }
}
