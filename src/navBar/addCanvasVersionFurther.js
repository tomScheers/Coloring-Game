import {
    userData
} from "../data/userData.js";
import {
    canvas,
    context
} from "../data/variables.js";
export const setCanvasVersionFurther = () => {
    const forwardButton = document.getElementById("gofurther-button");
    forwardButton.addEventListener("click", () => {
        if (userData.currentIndex >= userData.canvasVersions.length) return;
        const newData = context.createImageData(canvas.width, canvas.height);
        const data = userData.canvasVersions[userData.currentIndex];
        newData.data.set(data);
        context.putImageData(newData, 0, 0);
        userData.currentIndex++;
    });
}