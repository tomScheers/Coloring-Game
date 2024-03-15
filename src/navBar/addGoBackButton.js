import {
    userData
} from "../data/userData.js";
import {
    context,
    canvas
} from "../data/variables.js";


export const setCanvasVersions = () => {
    const goBack = document.getElementById("goback-button");

    goBack.addEventListener("click", () => {
        if (userData.currentIndex <= 1) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            userData.currentIndex = 0;
            return;
        }
        // Copy the data of the current canvas
        const newData = context.createImageData(canvas.width, canvas.height);

        // Gets the data of the previous canvas
        const data = userData.canvasVersions[userData.currentIndex - 2];
        newData.data.set(data);

        // Pushes the data of the previous canvas onto the old canvas
        context.putImageData(newData, 0, 0);
        userData.currentIndex--; 
    })
}