import { canvas, context } from "../../data/variables.js";

import { getRadius } from "../../data/functions.js";

import { userData } from "../../data/userData.js";

export const scaleCanvasOnResize = () => {
    // Save the current drawing
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // Sets the canvas width and height
    canvas.width = (window.innerWidth / 3) * 2;
    canvas.height = (window.innerHeight / 50) * 47;

    // Restore the saved drawing
    context.putImageData(imageData, 0, 0);
    context.lineWidth = getRadius(userData.size) * 2;
    context.strokeStyle = userData.colorValues;
    context.filter = userData.filterValues;
};
