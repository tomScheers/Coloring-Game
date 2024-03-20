import { circle } from "./data/variables.js";

const getMousePos = (event) => {
    return {
        x: event.clientX,
        y: event.clientY,
    };
};
export const createMouseListener = (event) => {
    const mousePos = getMousePos(event);
    circle.style.left = `calc(${mousePos.x}px - ${circle.style.width} / 2)`;
    circle.style.top = `calc(${mousePos.y}px - ${circle.style.height} / 2)`;
};
