import { userData } from "../../data/userData.js";

import { context, canvas } from "../../data/variables.js";

let startPoint = {
    x: 0,
    y: 0,
};

export const startDrawing = (event) => {
    userData.isDrawing = true;

    startPoint = {
        x: event.clientX - canvas.getBoundingClientRect().left,
        y: event.clientY - canvas.getBoundingClientRect().top,
    };

    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
};
