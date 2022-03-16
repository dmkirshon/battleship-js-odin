import player from "./player";

let playerOne;
let computer;
beforeEach(() => {
  playerOne = player("Bob");
  computer = player("Computer");
  playerOne.setOpponent(computer);
  computer.setOpponent(playerOne);

  playerOne.getPlayerGameboard().placeShip("destroyer", "B", 0, "horizontal");
  computer.getPlayerGameboard().placeShip("destroyer", "B", 0, "horizontal");
});

describe("Get Player Name", () => {
  it("returns player's name", () => {
    expect(playerOne.getName()).toBe("Bob");
  });
});

describe("Attack Opponent", () => {
  it("attacks given a set of coordinates, and misses", () => {
    const row = "A";
    const col = 0;
    playerOne.attackOpponent(row, col);
    expect(computer.getPlayerGameboard().getGameboard()[row][col]).toBe("O");
    computer.attackOpponent(row, col);
    expect(playerOne.getPlayerGameboard().getGameboard()[row][col]).toBe("O");
  });
  it("attacks given a set of coordinates, and hits", () => {
    const row = "B";
    const col = 0;
    playerOne.attackOpponent(row, col);
    expect(computer.getPlayerGameboard().getGameboard()[row][col]).toBe("X");
    computer.attackOpponent(row, col);
    expect(playerOne.getPlayerGameboard().getGameboard()[row][col]).toBe("X");
  });
});

describe("Attack By Computer", () => {
  beforeEach(() => {
    const rowLetters = "ABCDEFGHIJ";
    for (let i = 0; i < 10; i++) {
      const row = rowLetters[i];
      for (let j = 0; j < 10; j++) {
        const col = j;
        if (!(row === "B" && col === 0) && !(row === "A" && col === 0)) {
          playerOne.getPlayerGameboard().receiveAttack(row, col);
        }
      }
    }
  });
  it("attacks player in random location and misses", () => {
    const row = "A";
    const col = 0;
    expect(playerOne.getPlayerGameboard().getGameboard()[row][col]).toBe(
      undefined
    );
    playerOne.getPlayerGameboard().receiveAttack("B", 0);
    computer.attackByComputer();
    expect(playerOne.getPlayerGameboard().getGameboard()[row][col]).toBe("O");
  });
  it("attacks player in random location and hits", () => {
    const row = "B";
    const col = 0;
    expect(playerOne.getPlayerGameboard().getGameboard()[row][col]).toBe("S");
    playerOne.getPlayerGameboard().receiveAttack("A", 0);
    computer.attackByComputer();
    expect(playerOne.getPlayerGameboard().getGameboard()[row][col]).toBe("X");
  });
});
