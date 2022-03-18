import gameboard from "./gameboard";

const player = (name) => {
  let opponent;
  const playerGameboard = gameboard();

  const getName = () => name;
  const getOpponent = () => opponent;
  const getPlayerGameboard = () => playerGameboard;
  const setOpponent = (otherPlayer) => {
    opponent = otherPlayer;
  };
  const isComputer = () => name === "computer";

  const attackOpponent = (row, col) => {
    opponent.getPlayerGameboard().receiveAttack(row, col);
  };

  const attackByComputer = () => {
    const randLocation = createRandomLocation();
    const randRow = randLocation.randRow;
    const randCol = randLocation.randCol;

    opponent.getPlayerGameboard().receiveAttack(randRow, randCol);
  };

  const createRandomLocation = () => {
    const openLocations = opponent
      .getPlayerGameboard()
      .getNonAttackedLocations();

    const rowLetters = [];
    let colNumbers = [];

    openLocations.forEach((rowLocations) => {
      rowLetters.push(rowLocations.row);
      colNumbers = rowLocations.colSpots;
    });

    const randRow = rowLetters[Math.floor(Math.random() * rowLetters.length)];

    const randCol = colNumbers[Math.floor(Math.random() * colNumbers.length)];

    return { randRow, randCol };
  };

  return {
    getName,
    getPlayerGameboard,
    setOpponent,
    attackOpponent,
    attackByComputer,
    isComputer,
    getOpponent,
  };
};

export default player;
