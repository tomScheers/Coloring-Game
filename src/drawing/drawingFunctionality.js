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

let isDrawing = false;
let startPoint = {
    x: 0,
    y: 0
};
const startDrawing = (event) => {
    isDrawing = true;

    startPoint = {
        x: event.clientX - canvas.getBoundingClientRect().left,
        y: event.clientY - canvas.getBoundingClientRect().top
    };

    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
}

const draw = (event) => {
    if (!isDrawing) return;
    context.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
}

const stopDrawing = () => {
    isDrawing = false;
}

canvas.width = window.innerWidth / 3 * 2;
canvas.height = canvas.width / 4 * 6;
context.lineWidth = getRadius(userData.size) * 2;
context.strokeStyle = userData.currentColor;

const addDrawEventListeners = () => {
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
}
export {
    addDrawEventListeners
};