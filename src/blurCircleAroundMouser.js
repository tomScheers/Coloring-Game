import {
    userData
} from "./data/userData.js";
import {
    getMousePos,
    setCircleColor
} from "./data/functions.js";
import {
    circle
} from "./data/variables.js";

export const createMouseListener = (event) => {
    const mousePos = getMousePos(event);
    circle.style.left = `calc(${mousePos.x}px - ${circle.style.width} / 2)`;
    circle.style.top = `calc(${mousePos.y}px - ${circle.style.height} / 2)`;
}