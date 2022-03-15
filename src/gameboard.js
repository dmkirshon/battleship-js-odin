import { debug } from "webpack";
import ship from "./ship";

const gameboard = () => {
  const board = {
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

  const getGameboard = () => Object.assign(board);

  const shipTypes = {
    carrier: { size: 5, shipInstance: ship(5), shipCoordinates: [] },
    battleship: { size: 4, shipInstance: ship(4), shipCoordinates: [] },
    cruiser: { size: 3, shipInstance: ship(3), shipCoordinates: [] },
    submarine: { size: 3, shipInstance: ship(3), shipCoordinates: [] },
    destroyer: { size: 2, shipInstance: ship(2), shipCoordinates: [] },
  };

  const placeShip = (shipType, row, col, axis) => {
    const shipSize = shipTypes[shipType]["size"];

    if (isValidSpot(shipSize, row, col, axis)) {
      if (axis === "horizontal") {
        placeHorizontal(shipType, row, col);
      } else {
        placeVertical(shipType, row, col);
      }
    }
  };

  const placeHorizontal = (shipType, row, col) => {
    const shipSize = shipTypes[shipType]["size"];

    for (let i = col; i < col + shipSize; i++) {
      board[row][i] = "S";
      shipTypes[shipType]["shipCoordinates"].push({ row: row, col: i });
    }
  };

  const placeVertical = (shipType, row, col) => {
    const shipSize = shipTypes[shipType]["size"];
    const rowCharCode = row.charCodeAt();

    for (let i = rowCharCode; i < rowCharCode + shipSize; i++) {
      const rowChar = String.fromCharCode(i);
      board[rowChar][col] = "S";
      shipTypes[shipType]["shipCoordinates"].push({ row: rowChar, col: col });
    }
  };

  const isValidSpot = (shipSize, row, col, axis) => {
    if (axis === "horizontal") {
      for (let i = col; i < col + shipSize; i++) {
        if (board[row][i]) {
          return false;
        }
      }

      return true;
    } else {
      const rowCharCode = row.charCodeAt();

      for (let i = rowCharCode; i < rowCharCode + shipSize; i++) {
        const rowChar = String.fromCharCode(i);
        if (board[rowChar][col]) {
          return false;
        }
      }

      return true;
    }
  };

  const receiveAttack = (row, col) => {
    const attackSpot = board[row][col];

    if (attackSpot === "S") {
      board[row][col] = "X";
      hitShip(row, col);
    } else {
      board[row][col] = "O";
    }
  };

  const hitShip = (row, col) => {
    let shipHitIndex;
    const shipHit = Object.values(shipTypes).filter((shipProperties) => {
      let matchedCoordinates = false;
      shipProperties.shipCoordinates.forEach(
        (coordinatePair, coordinateIndex) => {
          const arrayHitCoordinates = JSON.stringify({ row, col });
          const arrayCoordinatePair = JSON.stringify(coordinatePair);
          if (arrayCoordinatePair === arrayHitCoordinates) {
            matchedCoordinates = true;
            shipHitIndex = coordinateIndex;
          }
        }
      );
      return matchedCoordinates;
    })[0];

    shipHit.shipInstance.hit(shipHitIndex);
  };

  const areShipsSunk = () => {
    let shipsSunk = true;
    Object.values(shipTypes).forEach((shipProperties) => {
      if (!shipProperties.shipInstance.isSunk()) {
        shipsSunk = false;
      }
    });
    return shipsSunk;
  };
  return { getGameboard, placeShip, receiveAttack, areShipsSunk };
};

export default gameboard;
