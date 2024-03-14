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

/**
 * The function `startDrawing` sets a flag to indicate drawing has started and records the starting
 * point for drawing on a canvas element.
 * @param event - The `event` parameter in the `startDrawing` function is an event object that contains
 * information about the event that triggered the function. This could be a mouse click, mouse move,
 * touch event, etc. The event object typically includes properties like `clientX` and `clientY` which
 * represent
 */
const startDrawing = (event) => {
    isDrawing = true;

    startPoint = {
        x: event.clientX - canvas.getBoundingClientRect().left,
        y: event.clientY - canvas.getBoundingClientRect().top
    };

    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
}

/**
 * The `draw` function in JavaScript is used to draw lines on a canvas element based on user mouse
 * movements.
 * @param event - The `event` parameter in the `draw` function represents the event that triggered the
 * drawing action, such as a mouse movement or touch event. It contains information about the event,
 * including the coordinates of the cursor or touch point.
 * @returns The `draw` function returns `undefined`.
 */
const draw = (event) => {
    if (!isDrawing) return;
    context.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
}

/**
 * The function `stopDrawing` sets the variable `isDrawing` to false.
 */
const stopDrawing = () => {

    if (!isDrawing) return;
    if (userData.currentIndex < userData.canvasVersions.length) {
        userData.canvasVersions = userData.canvasVersions.slice(0, userData.currentIndex);
    }
    isDrawing = false;
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    userData.currentIndex++;
    userData.canvasVersions.push(data);
}

canvas.width = window.innerWidth / 3 * 2;
canvas.height = window.innerHeight / 50 * 47;
context.lineWidth = getRadius(userData.size) * 2;
context.strokeStyle = userData.colorValues;

const scaleCanvasOnResize = () => {
    // Save the current drawing
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    canvas.width = window.innerWidth / 3 * 2;
    canvas.height = window.innerHeight / 50 * 47;


    // Restore the saved drawing
    context.putImageData(imageData, 0, 0);

    context.lineWidth = getRadius(userData.size) * 2;
    context.strokeStyle = userData.colorValues;
    context.filter = `blur(${userData.blurVal}rem) brightness(${userData.brightness}%)`;
}

/**
 * The function `addDrawEventListeners` adds event listeners for drawing on a canvas element.
 */
const addDrawEventListeners = () => {
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    window.addEventListener("resize", scaleCanvasOnResize);
}

export {
    addDrawEventListeners
};