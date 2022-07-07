import gameboard from "./gameboard";

let testGameboard;
beforeEach(() => {
  testGameboard = gameboard();
});

describe("Place Ship", () => {
  it("checks that horizontal orientation places ship correctly", () => {
    testGameboard.placeShip("carrier", "A", 0, "horizontal");
    expect(testGameboard.getBoard().A[0]).toBe("S");
    expect(testGameboard.getBoard().A[1]).toBe("S");
    expect(testGameboard.getBoard().A[2]).toBe("S");
    expect(testGameboard.getBoard().A[3]).toBe("S");
    expect(testGameboard.getBoard().A[4]).toBe("S");
    expect(testGameboard.getBoard().A[5]).not.toBe("S");
  });
  it("checks that vertical orientation places ship correctly", () => {
    testGameboard.placeShip("carrier", "A", 0, "vertical");
    expect(testGameboard.getBoard().A[0]).toBe("S");
    expect(testGameboard.getBoard().B[0]).toBe("S");
    expect(testGameboard.getBoard().C[0]).toBe("S");
    expect(testGameboard.getBoard().D[0]).toBe("S");
    expect(testGameboard.getBoard().E[0]).toBe("S");
    expect(testGameboard.getBoard().F[0]).not.toBe("S");
  });
  it("checks that ship types can differ correctly", () => {
    testGameboard.placeShip("submarine", "D", 5, "horizontal");
    expect(testGameboard.getBoard().D[5]).toBe("S");
    expect(testGameboard.getBoard().D[6]).toBe("S");
    expect(testGameboard.getBoard().D[7]).toBe("S");
    expect(testGameboard.getBoard().D[8]).not.toBe("S");
  });
  it("doesn't place ship if spot is blocked", () => {
    testGameboard.placeShip("submarine", "D", 5, "horizontal");
    testGameboard.placeShip("carrier", "D", 5, "horizontal");
    expect(testGameboard.getBoard().D[5]).toBe("S");
    expect(testGameboard.getBoard().D[6]).toBe("S");
    expect(testGameboard.getBoard().D[7]).toBe("S");
    expect(testGameboard.getBoard().D[8]).not.toBe("S");
    expect(testGameboard.getBoard().D[9]).not.toBe("S");
  });
  it("doesn't place ship if spot is blocked in opposite orientation", () => {
    testGameboard.placeShip("submarine", "D", 5, "horizontal");
    testGameboard.placeShip("carrier", "A", 5, "vertical");
    expect(testGameboard.getBoard().D[5]).toBe("S");
    expect(testGameboard.getBoard().D[6]).toBe("S");
    expect(testGameboard.getBoard().D[7]).toBe("S");
    expect(testGameboard.getBoard().A[5]).not.toBe("S");
    expect(testGameboard.getBoard().B[5]).not.toBe("S");
    expect(testGameboard.getBoard().C[5]).not.toBe("S");
    expect(testGameboard.getBoard().E[5]).not.toBe("S");
  });
});

describe("Receive Attack", () => {
  beforeEach(() => {
    testGameboard.placeShip("carrier", "B", 0, "horizontal");
  });
  it("takes a pair of coordinates for an empty spot and records the mark", () => {
    testGameboard.receiveAttack("A", 0);
    expect(testGameboard.getBoard().A[0]).toBe("O");
  });
  // eslint-disable-next-line jest/no-identical-title
  it("takes a pair of coordinates for an empty spot and records the mark", () => {
    testGameboard.receiveAttack("J", 10);
    expect(testGameboard.getBoard().J[10]).toBe("O");
  });
  // eslint-disable-next-line jest/no-identical-title
  it("takes a pair of coordinates for an empty spot and records the mark", () => {
    testGameboard.receiveAttack("D", 5);
    expect(testGameboard.getBoard().D[5]).toBe("O");
  });
  it("takes a pair of coordinates that contains a ship and makes the hit", () => {
    expect(testGameboard.getBoard().B[0]).toBe("S");
    testGameboard.receiveAttack("B", 0);
    expect(testGameboard.getBoard().B[0]).toBe("X");
  });
  // eslint-disable-next-line jest/no-identical-title
  it("takes a pair of coordinates that contains a ship and makes the hit", () => {
    expect(testGameboard.getBoard().B[4]).toBe("S");
    testGameboard.receiveAttack("B", 4);
    expect(testGameboard.getBoard().B[4]).toBe("X");
  });
  // eslint-disable-next-line jest/no-identical-title
  it("takes a pair of coordinates that contains a ship and makes the hit", () => {
    expect(testGameboard.getBoard().B[5]).toBe(undefined);
    testGameboard.receiveAttack("B", 5);
    expect(testGameboard.getBoard().B[5]).toBe("O");
  });
});

describe("Are Ships Sunk", () => {
  beforeEach(() => {
    testGameboard.placeShip("carrier", "A", 0, "horizontal");
    testGameboard.placeShip("battleship", "A", 5, "horizontal");
    testGameboard.placeShip("submarine", "B", 0, "horizontal");
    testGameboard.placeShip("cruiser", "B", 3, "horizontal");
    testGameboard.placeShip("destroyer", "A", 9, "vertical");

    // strike all but the last spot of the destroyer
    for (let i = 0; i < 10; i += 1) testGameboard.receiveAttack("A", i);
    for (let i = 0; i < 9; i += 1) testGameboard.receiveAttack("B", i);
  });
  it("returns false if all ships are not sunk", () => {
    expect(testGameboard.areShipsSunk()).toBeFalsy();
  });
  it("returns true if all ships are sunk", () => {
    testGameboard.receiveAttack("B", 9);
    expect(testGameboard.areShipsSunk()).toBeTruthy();
  });
});

describe("Get Non-Attacked Locations", () => {
  beforeEach(() => {
    testGameboard.placeShip("destroyer", "B", 0, "horizontal");
    const rowLetters = "ABCDEFGHIJ";
    for (let i = 0; i < 10; i += 1) {
      const row = rowLetters[i];
      for (let j = 0; j < 10; j += 1) {
        const col = j;
        if (!(row === "B" && col === 0) && !(row === "A" && col === 0)) {
          testGameboard.receiveAttack(row, col);
        }
      }
    }
  });

  it("returns list of non-attacked locations", () => {
    expect(testGameboard.getNonAttackedLocations()).toEqual([
      { row: "A", colSpots: [0] },
      { row: "B", colSpots: [0] },
    ]);
  });
});
