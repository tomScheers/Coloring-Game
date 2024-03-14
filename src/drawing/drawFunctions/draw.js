import {
    userData
} from "../../data/userData.js";

import {
    context,
    canvas
} from "../../data/variables.js";

export const draw = (event) => {
    if (!userData.isDrawing) return;
    context.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
}