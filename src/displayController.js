import gameboard from "./gameboard";

const displayController = () => {
  const humanBoardDiv = document.querySelector(".human-board");
  const computerBoardDiv = document.querySelector(".computer-board");

  const whichPlayerDiv = (player) => {
    return player.isComputer() ? computerBoardDiv : humanBoardDiv;
  };

  const createPlayerBoard = (player) => {
    const playerName = player.getName();
    const board = gameboard().getBoard();
    const playerBoardDiv = whichPlayerDiv(player);

    const emptyDiv = document.createElement("div");
    emptyDiv.className = `board-cell-first`;
    playerBoardDiv.appendChild(emptyDiv);

    for (let i = 0; i < 10; i += 1) {
      const numberDiv = document.createElement("div");
      numberDiv.className = `board-cell-number`;
      numberDiv.textContent = i;
      playerBoardDiv.appendChild(numberDiv);
    }

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const rowVal in board) {
      const letterDiv = document.createElement("div");
      letterDiv.className = `board-cell-letter`;
      letterDiv.textContent = rowVal;
      playerBoardDiv.appendChild(letterDiv);

      // eslint-disable-next-line no-restricted-syntax
      for (const colVal of board[rowVal].keys()) {
        const battleCellDiv = document.createElement("div");
        battleCellDiv.className = `battle-cell board-cell-${playerName}`;
        battleCellDiv.dataset.row = rowVal;
        battleCellDiv.dataset.col = colVal;
        playerBoardDiv.appendChild(battleCellDiv);
      }
    }
  };

  const drawOnBoard = (boardDiv, symbol, symbolLocations) => {
    symbolLocations.forEach((location) => {
      location.colSpots.forEach((spot) => {
        const battleCell = boardDiv.querySelector(
          `[data-row="${location.row}"][data-col="${spot}"]`
        );

        battleCell.textContent = symbol;
      });
    });
  };

  const drawShips = (player) => {
    const playerBoardDiv = whichPlayerDiv(player);
    const playerBoard = player.getPlayerGameboard();
    const symbolLocations = playerBoard.getShipLocations();
    drawOnBoard(playerBoardDiv, "S", symbolLocations);
  };
  const drawHits = (player) => {
    const playerBoardDiv = whichPlayerDiv(player);
    const playerBoard = player.getPlayerGameboard();
    const symbolLocations = playerBoard.getHitLocations();
    drawOnBoard(playerBoardDiv, "X", symbolLocations);
  };
  const drawMisses = (player) => {
    const playerBoardDiv = whichPlayerDiv(player);
    const playerBoard = player.getPlayerGameboard();
    const symbolLocations = playerBoard.getMissLocations();
    drawOnBoard(playerBoardDiv, "O", symbolLocations);
  };

  const listenForOpenOpponentBattleCells = (opponent) => {
    const otherPlayer = opponent.getOpponent();
    const opponentDiv = whichPlayerDiv(opponent);
    const openLocations = opponent
      .getPlayerGameboard()
      .getNonAttackedLocations();

    function attackCell() {
      openLocations.forEach((rowLocations) => {
        rowLocations.colSpots.forEach((loc) => {
          const battleCell = opponentDiv.querySelector(
            `[data-row="${rowLocations.row}"][data-col="${loc}"]`
          );
          battleCell.classList.remove("active-battle-cell");
          battleCell.removeEventListener("click", attackCell);
        });
      });
      const attackRow = this.dataset.row;
      const attackCol = Number(this.dataset.col);

      otherPlayer.attackOpponent(attackRow, attackCol);
      drawHits(opponent);
      drawMisses(opponent);

      const gameOverWin = opponent.getPlayerGameboard().areShipsSunk();

      if (gameOverWin) {
        return;
      }

      opponent.attackByComputer();
      drawHits(otherPlayer);
      drawMisses(otherPlayer);

      const gameOverLose = otherPlayer.getPlayerGameboard().areShipsSunk();

      if (gameOverLose) {
        return;
      }

      listenForOpenOpponentBattleCells(opponent);
    }

    openLocations.forEach((rowLocations) => {
      rowLocations.colSpots.forEach((loc) => {
        const battleCell = opponentDiv.querySelector(
          `[data-row="${rowLocations.row}"][data-col="${loc}"]`
        );
        battleCell.classList.add("active-battle-cell");
        battleCell.addEventListener("click", attackCell);
      });
    });
  };

  return {
    createPlayerBoard,
    drawShips,
    drawHits,
    drawMisses,
    listenForOpenOpponentBattleCells,
  };
};

export default displayController;
