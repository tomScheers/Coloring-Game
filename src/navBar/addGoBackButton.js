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
        const newData = context.createImageData(canvas.width, canvas.height);
        const data = userData.canvasVersions[userData.currentIndex - 2];
        newData.data.set(data);
        context.putImageData(newData, 0, 0);
        userData.currentIndex--; 
    })
}