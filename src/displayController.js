import gameboard from "./gameboard";
import player from "./player";

const displayController = () => {
  const playerBoardDiv = document.querySelector(".player-board");
  const computerBoardDiv = document.querySelector(".computer-board");

  const createBoardOutline = (player) => {
    const playerName = player.getName();
    const board = gameboard().getBoard();

    const emptyDiv = document.createElement("div");
    emptyDiv.className = `board-cell-first`;
    playerBoardDiv.appendChild(emptyDiv);

    for (let i = 0; i < 10; i++) {
      const numberDiv = document.createElement("div");
      numberDiv.className = `board-cell-number`;
      numberDiv.textContent = i;
      playerBoardDiv.appendChild(numberDiv);
    }

    for (const row in board) {
      const letterDiv = document.createElement("div");
      letterDiv.className = `board-cell-letter`;
      letterDiv.textContent = row;
      playerBoardDiv.appendChild(letterDiv);

      for (const colSpot of board[row]) {
        const emptyDiv = document.createElement("div");
        emptyDiv.className = `board-cell board-cell-${playerName}`;
        playerBoardDiv.appendChild(emptyDiv);
      }
    }
  };

  return { createBoardOutline };
};

export default displayController;
