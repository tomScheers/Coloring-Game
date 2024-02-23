import {
    canvas,
    context
} from "../variables.js";

import {
    userData
} from "../userData.js";

import {
    getRadius
} from "../functions.js";

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

canvas.width = window.innerWidth / 2 * 3;
canvas.height = canvas.width / 4 * 6;
context.lineWidth = getRadius(userData.size) * 2;
context.strokeStyle = userData.currentColor;

export {
    startDrawing,
    draw,
    stopDrawing
};