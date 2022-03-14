import ship from "./ship";

let testShip;

beforeEach(() => {
  testShip = ship(3);
});

describe("Ship Length", () => {
  it("verifies length of ship was set", () => {
    expect(testShip.getLength()).toBe(3);
  });
});

describe("Ship hit", () => {
  it("marks a position of ship as hit", () => {
    testShip.hit(0);
    expect(testShip.getHits()).toEqual([0]);
  });
  it("marks a position of ship from multiple hits", () => {
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);

    expect(testShip.getHits()).toEqual([0, 1, 2]);
  });
});

describe("Ship sunk", () => {
  it("returns that ship is sunk", () => {
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);

    expect(testShip.isSunk()).toBeTruthy();
  });
  it("returns that ship is not sunk", () => {
    testShip.hit(0);
    testShip.hit(2);

    expect(testShip.isSunk()).toBeFalsy();
  });
});
