import {
    userData
} from "../../data/userData.js";

import {
    context,
    canvas
} from "../../data/variables.js";

export const stopDrawing = () => {
    if (!userData.isDrawing) return;

    const indexIsLastCanvas = userData.currentIndex > userData.canvasVersions.length;
    if (!indexIsLastCanvas) {
        userData.currentCanvasVersion = userData.canvasVersions.slice(0, userData.currentIndex);
    }
    userData.isDrawing = false;
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    userData.currentIndex++;
    userData.currentCanvasVersion = [...userData.canvasVersions, data];
}