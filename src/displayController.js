import gameboard from "./gameboard";

const displayController = () => {
  const humanBoardDiv = document.querySelector(".human-board");
  const computerBoardDiv = document.querySelector(".computer-board");

  const createPlayerBoard = (player) => {
    const playerName = player.getName();
    const board = gameboard().getBoard();
    const playerBoardDiv = whichPlayerDiv(player);

    const emptyDiv = document.createElement("div");
    emptyDiv.className = `board-cell-first`;
    playerBoardDiv.appendChild(emptyDiv);

    for (let i = 0; i < 10; i++) {
      const numberDiv = document.createElement("div");
      numberDiv.className = `board-cell-number`;
      numberDiv.textContent = i;
      playerBoardDiv.appendChild(numberDiv);
    }

    for (const rowVal in board) {
      const letterDiv = document.createElement("div");
      letterDiv.className = `board-cell-letter`;
      letterDiv.textContent = rowVal;
      playerBoardDiv.appendChild(letterDiv);

      for (const colVal of board[rowVal].keys()) {
        const battleCellDiv = document.createElement("div");
        battleCellDiv.className = `battle-cell board-cell-${playerName}`;
        battleCellDiv.dataset.row = rowVal;
        battleCellDiv.dataset.col = colVal;
        playerBoardDiv.appendChild(battleCellDiv);
      }
    }
  };

  const drawShips = (player) => {
    const playerBoardDiv = whichPlayerDiv(player);
    const playerBoard = player.getPlayerGameboard();
    const symbolLocations = playerBoard.getShipLocations();
    drawOnBoard(playerBoardDiv, "S", symbolLocations);
  };
  const drawHits = (player) => {};
  const drawMisses = (player) => {};

  const drawOnBoard = (boardDiv, symbol, symbolLocations) => {
    symbolLocations.forEach((location) => {
      boardDiv.querySelector(
        `[data-row="${location.row}"][data-col="${location.col}"]`
      ).textContent = symbol;
    });
  };

  const whichPlayerDiv = (player) => {
    return player.isComputer() ? computerBoardDiv : humanBoardDiv;
  };

  return { createPlayerBoard, drawShips };
};

export default displayController;
