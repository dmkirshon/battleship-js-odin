import displayController from "./displayController";
import player from "./player";
import "./style.css";

const humanPlayer = player("human");
const computerPlayer = player("computer");
humanPlayer.setOpponent(computerPlayer);
computerPlayer.setOpponent(humanPlayer);

humanPlayer.getPlayerGameboard().placeShip("cruiser", "B", 2, "horizontal");

computerPlayer.getPlayerGameboard().placeShip("cruiser", "B", 2, "horizontal");

displayController().createPlayerBoard(humanPlayer);
displayController().createPlayerBoard(computerPlayer);

displayController().drawShips(humanPlayer);

displayController().listenForOpenOpponentBattleCells(computerPlayer);
