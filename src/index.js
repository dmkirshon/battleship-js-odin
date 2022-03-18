import displayController from "./displayController";
import player from "./player";
import style from "./style.css";

const humanPlayer = player("human");

displayController().createBoardOutline(humanPlayer);
