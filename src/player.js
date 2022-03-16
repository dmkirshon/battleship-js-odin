import gameboard from "./gameboard";

const player = (name) => {
  let opponent;
  const playerGameboard = gameboard();

  const getName = () => name;
  const getPlayerGameboard = () => playerGameboard;
  const setOpponent = (otherPlayer) => {
    opponent = otherPlayer;
  };

  const attackOpponent = (row, col) => {
    opponent.getPlayerGameboard().receiveAttack(row, col);
  };

  const attackByComputer = () => {
    const randRow = createRandomLocation().randRow;
    const randCol = createRandomLocation().randCol;

    opponent.getPlayerGameboard().receiveAttack(randRow, randCol);
  };

  const createRandomLocation = () => {
    const openLocations = opponent
      .getPlayerGameboard()
      .getNonAttackedLocations();

    let rowLetters = [];

    openLocations.forEach((loc) => rowLetters.push(loc.row));

    const randRow = rowLetters[Math.floor(Math.random() * rowLetters.length)];
    const randCol = Math.floor(Math.random() * openLocations.length);

    return { randRow, randCol };
  };

  return {
    getName,
    getPlayerGameboard,
    setOpponent,
    attackOpponent,
    attackByComputer,
  };
};

export default player;
