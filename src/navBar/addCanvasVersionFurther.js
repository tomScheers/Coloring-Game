import { userData } from "../data/userData.js";

import { canvas, context } from "../data/variables.js";

export const incrementCanvasVersion = () => {
    const forwardButton = document.getElementById("gofurther-button");
    forwardButton.addEventListener("click", () => {
        const indexIsLastCanvas =
            userData.currentIndex > userData.canvasVersions.length;
        if (indexIsLastCanvas) return;

        // Copy the data of the current canvas
        const newData = context.createImageData(canvas.width, canvas.height);

        // Get the data of the canvas that you'll increment to
        const data = userData.canvasVersions[userData.currentIndex];
        if (data === undefined) return;
        newData.data.set(data);
        context.putImageData(newData, 0, 0);
        userData.currentIndex++;
    });
};
