import { userData } from "../../data/userData.js";

import { context, canvas } from "../../data/variables.js";

export const stopDrawing = () => {
    if (!userData.isDrawing) return;

    const indexIsLastCanvas =
        userData.currentIndex > userData.canvasVersions.length;

    // if you draw more onto the canvas, the cache will get reset to it's current index, so if you were to be at point 10 and go back to point 8, and then you would draw another point 9, point 10 would be removed from the cache
    if (!indexIsLastCanvas) {
        userData.canvasVersions = userData.canvasVersions.slice(
            0,
            userData.currentIndex
        );
    }

    userData.isDrawing = false;
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const totalDataColorValue = data.reduce(
        (totalColorValue, currentColorValue) =>
            totalColorValue + currentColorValue,
        0
    );
    const totalColorValueCurrentCanvas =
        userData.canvasVersions[userData.canvasVersions.length - 1]?.reduce(
            (totalColorValue, currentColorValue) =>
                totalColorValue + currentColorValue,
            0
        ) || 0;

    // this checks if the current canvas is the same as the last one, if so you return from the function
    if (totalDataColorValue === totalColorValueCurrentCanvas) return;
    userData.currentIndex++;
    userData.currentCanvasVersion = [...userData.canvasVersions, data];
};
