import {
    canvas,
    context
} from "../data/variables.js";

import {
    userData
} from "../data/userData.js";

import {
    getRadius
} from "../data/functions.js";

import {
    startDrawing
} from "./drawFunctions/startDrawing.js";

import {
    stopDrawing
} from "./drawFunctions/stopDrawing.js";

import {
    draw
} from "./drawFunctions/draw.js";

import {
    scaleCanvasOnResize
} from "./drawFunctions/scaleCanvasOnResize.js";

canvas.width = window.innerWidth / 3 * 2;
canvas.height = window.innerHeight / 50 * 47;
context.lineWidth = getRadius(userData.size) * 2;
context.strokeStyle = userData.colorValues;

export const addDrawEventListeners = () => {
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    window.addEventListener("resize", scaleCanvasOnResize);
}