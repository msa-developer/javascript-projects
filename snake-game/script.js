const board = document.querySelector(".board");

const rowHeight = 22;
const columnWidth = 22;

const rows = Math.floor(board.clientHeight / rowHeight);
const columns = Math.floor(board.clientWidth / columnWidth);

for (let row = 0; row < rows; row++) {
  for (let column = 0; column < columns; column++) {
    const block = document.createElement("div");
    board.appendChild(block);
  }
}
