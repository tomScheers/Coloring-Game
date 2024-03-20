import { userData } from "../../data/userData.js";

import { context, canvas } from "../../data/variables.js";

export const draw = (event) => {
    if (!userData.isDrawing) return;
    const newMousePosition = [
        event.clientX - canvas.getBoundingClientRect().left,
        event.clientY - canvas.getBoundingClientRect().top,
    ];
    context.lineTo(newMousePosition[0], newMousePosition[1]);
    context.stroke();
};
