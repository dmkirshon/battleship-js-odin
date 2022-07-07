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

  const getBoard = () => Object.assign(board);

  const shipTypes = {
    carrier: { size: 5, shipInstance: ship(5), shipCoordinates: [] },
    battleship: { size: 4, shipInstance: ship(4), shipCoordinates: [] },
    cruiser: { size: 3, shipInstance: ship(3), shipCoordinates: [] },
    submarine: { size: 3, shipInstance: ship(3), shipCoordinates: [] },
    destroyer: { size: 2, shipInstance: ship(2), shipCoordinates: [] },
  };

  const placeHorizontal = (shipType, row, col) => {
    const shipSize = shipTypes[shipType].size;

    for (let i = col; i < col + shipSize; i += 1) {
      board[row][i] = "S";
      shipTypes[shipType].shipCoordinates.push({ row, col: i });
    }
  };

  const placeVertical = (shipType, row, col) => {
    const shipSize = shipTypes[shipType].size;
    const rowCharCode = row.charCodeAt();

    for (let i = rowCharCode; i < rowCharCode + shipSize; i += 1) {
      const rowChar = String.fromCharCode(i);
      board[rowChar][col] = "S";
      shipTypes[shipType].shipCoordinates.push({ row: rowChar, col });
    }
  };

  const isValidSpot = (shipSize, row, col, axis) => {
    if (axis === "horizontal") {
      for (let i = col; i < col + shipSize; i += 1) {
        if (board[row][i]) {
          return false;
        }
      }

      return true;
    }
    const rowCharCode = row.charCodeAt();

    for (let i = rowCharCode; i < rowCharCode + shipSize; i += 1) {
      const rowChar = String.fromCharCode(i);
      if (board[rowChar][col]) {
        return false;
      }
    }

    return true;
  };

  const placeShip = (shipType, row, col, axis) => {
    const shipSize = shipTypes[shipType].size;

    if (isValidSpot(shipSize, row, col, axis)) {
      if (axis === "horizontal") {
        placeHorizontal(shipType, row, col);
      } else {
        placeVertical(shipType, row, col);
      }
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

  const receiveAttack = (row, col) => {
    const attackSpot = board[row][col];

    if (attackSpot === "S") {
      board[row][col] = "X";
      hitShip(row, col);
    } else {
      board[row][col] = "O";
    }
  };

  const areShipsSunk = () => {
    let shipsSunk = true;
    Object.values(shipTypes).forEach((shipProperties) => {
      if (
        shipProperties.shipCoordinates.length !== 0 &&
        !shipProperties.shipInstance.isSunk()
      ) {
        shipsSunk = false;
      }
    });
    return shipsSunk;
  };

  const getNonAttackedLocations = () => {
    const locations = [];
    Object.entries(board).forEach((rowArray) => {
      const rowValue = rowArray[0];
      const rowSpots = rowArray[1];
      const colSpots = [];

      for (let i = 0; i < rowSpots.length; i += 1) {
        const spot = rowSpots[i];
        if (spot === undefined || spot === "S") {
          colSpots.push(i);
        }
      }

      if (colSpots.length !== 0) {
        locations.push({ row: rowValue, colSpots });
      }
    });

    return locations;
  };

  const getSymbolLocations = (symbol) => {
    const locations = [];
    Object.entries(board).forEach((rowArray) => {
      const rowValue = rowArray[0];
      const rowSpots = rowArray[1];
      const colSpots = [];

      for (let i = 0; i < rowSpots.length; i += 1) {
        const spot = rowSpots[i];
        if (spot === symbol) {
          colSpots.push(i);
        }
      }

      if (colSpots.length !== 0) {
        locations.push({ row: rowValue, colSpots });
      }
    });

    return locations;
  };

  const getShipLocations = () => getSymbolLocations("S");
  const getHitLocations = () => getSymbolLocations("X");
  const getMissLocations = () => getSymbolLocations("O");

  return {
    getBoard,
    placeShip,
    receiveAttack,
    areShipsSunk,
    getNonAttackedLocations,
    getShipLocations,
    getHitLocations,
    getMissLocations,
  };
};

export default gameboard;
