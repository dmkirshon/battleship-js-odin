import displayController from "./displayController";
import player from "./player";
import style from "./style.css";

const humanPlayer = player("human");
const computerPlayer = player("computer");

humanPlayer.getPlayerGameboard().placeShip("cruiser", "B", 2, "horizontal");

displayController().createPlayerBoard(humanPlayer);
displayController().createPlayerBoard(computerPlayer);

displayController().drawShips(humanPlayer);
