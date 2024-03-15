import {
    context,
    canvas
} from "../data/variables.js";

import {
    userData
} from "../data/userData.js";

export const setResetButton = () => {
    const resetButton = document.getElementById("reset-button");
    
    resetButton.addEventListener("click", () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        userData.currentIndex = 0;
        userData.canvasVersions = [];
    })
}