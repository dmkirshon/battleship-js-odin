import gameboard from "./gameboard";

let testGameboard;
beforeEach(() => {
  testGameboard = gameboard();
});

describe("Place Ship", () => {
  it("takes a ship type, coordinates, and axis and places the ship on the board", () => {
    testGameboard.placeShip("carrier", "A", 0, "horizontal");
    expect(testGameboard.getGameboard()["A"][0]).toBe("S");
    expect(testGameboard.getGameboard()["A"][1]).toBe("S");
    expect(testGameboard.getGameboard()["A"][2]).toBe("S");
    expect(testGameboard.getGameboard()["A"][3]).toBe("S");
    expect(testGameboard.getGameboard()["A"][4]).toBe("S");
    expect(testGameboard.getGameboard()["A"][5]).not.toBe("S");
  });
  it("takes a ship type, coordinates, and axis and places the ship on the board", () => {
    testGameboard.placeShip("carrier", "A", 0, "vertical");
    expect(testGameboard.getGameboard()["A"][0]).toBe("S");
    expect(testGameboard.getGameboard()["B"][0]).toBe("S");
    expect(testGameboard.getGameboard()["C"][0]).toBe("S");
    expect(testGameboard.getGameboard()["D"][0]).toBe("S");
    expect(testGameboard.getGameboard()["E"][0]).toBe("S");
    expect(testGameboard.getGameboard()["F"][0]).not.toBe("S");
  });
  it("takes a ship type, coordinates, and axis and places the ship on the board", () => {
    testGameboard.placeShip("submarine", "D", 5, "horizontal");
    expect(testGameboard.getGameboard()["D"][5]).toBe("S");
    expect(testGameboard.getGameboard()["D"][6]).toBe("S");
    expect(testGameboard.getGameboard()["D"][7]).toBe("S");
    expect(testGameboard.getGameboard()["D"][8]).not.toBe("S");
  });
  it("doesn't place ship if spot is blocked", () => {
    testGameboard.placeShip("submarine", "D", 5, "horizontal");
    testGameboard.placeShip("carrier", "D", 5, "horizontal");
    expect(testGameboard.getGameboard()["D"][5]).toBe("S");
    expect(testGameboard.getGameboard()["D"][6]).toBe("S");
    expect(testGameboard.getGameboard()["D"][7]).toBe("S");
    expect(testGameboard.getGameboard()["D"][8]).not.toBe("S");
    expect(testGameboard.getGameboard()["D"][9]).not.toBe("S");
  });
  it("doesn't place ship if spot is blocked", () => {
    testGameboard.placeShip("submarine", "D", 5, "horizontal");
    testGameboard.placeShip("carrier", "A", 5, "vertical");
    expect(testGameboard.getGameboard()["D"][5]).toBe("S");
    expect(testGameboard.getGameboard()["D"][6]).toBe("S");
    expect(testGameboard.getGameboard()["D"][7]).toBe("S");
    expect(testGameboard.getGameboard()["A"][5]).not.toBe("S");
    expect(testGameboard.getGameboard()["B"][5]).not.toBe("S");
    expect(testGameboard.getGameboard()["C"][5]).not.toBe("S");
    expect(testGameboard.getGameboard()["E"][5]).not.toBe("S");
  });
});

describe("Receive Attack", () => {
  beforeEach(() => {
    testGameboard.placeShip("carrier", "B", 0, "horizontal");
  });
  it("takes a pair of coordinates for an empty spot and records the mark", () => {
    testGameboard.receiveAttack("A", 0);
    expect(testGameboard.getGameboard()["A"][0]).toBe("O");
  });
  it("takes a pair of coordinates for an empty spot and records the mark", () => {
    testGameboard.receiveAttack("J", 10);
    expect(testGameboard.getGameboard()["J"][10]).toBe("O");
  });
  it("takes a pair of coordinates for an empty spot and records the mark", () => {
    testGameboard.receiveAttack("D", 5);
    expect(testGameboard.getGameboard()["D"][5]).toBe("O");
  });
  it("takes a pair of coordinates that contains a ship and makes the hit", () => {
    expect(testGameboard.getGameboard()["B"][0]).toBe("S");
    testGameboard.receiveAttack("B", 0);
    expect(testGameboard.getGameboard()["B"][0]).toBe("X");
  });
  it("takes a pair of coordinates that contains a ship and makes the hit", () => {
    expect(testGameboard.getGameboard()["B"][4]).toBe("S");
    testGameboard.receiveAttack("B", 4);
    expect(testGameboard.getGameboard()["B"][4]).toBe("X");
  });
  it("takes a pair of coordinates that contains a ship and makes the hit", () => {
    expect(testGameboard.getGameboard()["B"][5]).toBe(undefined);
    testGameboard.receiveAttack("B", 5);
    expect(testGameboard.getGameboard()["B"][5]).toBe("O");
  });
});
