import ship from "./ship";

const gameboard = () => {
  const boardArray = {
    A: Array(10),
    B: Array(10),
    C: Array(10),
    D: Array(10),
    E: Array(10),
    F: Array(10),
    G: Array(10),
    H: Array(10),
    I: Array(10),
    J: Array(10),
  };

  const shipTypes = {
    carrier: { size: 5, shipInstance: ship(5) },
    battleship: { size: 4 },
    cruiser: { size: 3 },
    submarine: { size: 3 },
    destroyer: { size: 2 },
  };

  const placeShip = (shipType, row, col, axis) => {
    const shipSize = shipTypes[shipType]["size"];

    if (isValidSpot(shipSize, row, col, axis)) {
      if (axis === "horizontal") {
        placeHorizontal(shipSize, row, col);
      } else {
        placeVertical(shipSize, row, col);
      }
    }
  };

  const placeHorizontal = (shipSize, row, col) => {
    for (let i = col; i < col + shipSize; i++) {
      boardArray[row][i] = "S";
    }
  };

  const placeVertical = (shipSize, row, col) => {
    const rowCharCode = row.charCodeAt();

    for (let i = rowCharCode; i < rowCharCode + shipSize; i++) {
      const rowChar = String.fromCharCode(i);
      boardArray[rowChar][col] = "S";
    }
  };

  const isValidSpot = (shipSize, row, col, axis) => {
    if (axis === "horizontal") {
      for (let i = col; i < col + shipSize; i++) {
        if (boardArray[row][i]) {
          return false;
        }
      }

      return true;
    } else {
      const rowCharCode = row.charCodeAt();

      for (let i = rowCharCode; i < rowCharCode + shipSize; i++) {
        const rowChar = String.fromCharCode(i);
        if (boardArray[rowChar][col]) {
          return false;
        }
      }

      return true;
    }
  };

  const getGameboard = () => Object.assign(boardArray);

  const receiveAttack = (row, col) => {
    const attackSpot = boardArray[row][col];

    if (attackSpot === "S") {
      boardArray[row][col] = "X";
    } else {
      boardArray[row][col] = "O";
    }
  };
  return { getGameboard, placeShip, receiveAttack };
};

export default gameboard;
