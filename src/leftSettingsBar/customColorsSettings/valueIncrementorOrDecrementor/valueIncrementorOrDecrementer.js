import {
    incrementOrDecrementColorValue
} from "./incrementOrDecrement.js";

import {
    userData
} from "../../../data/userData.js";

export const incrementOrDecrementCustomColorValues = (dialog) => {
    const customColorsMap = ["red-value-decrement", "red-value-increment", "green-value-decrement", "green-value-increment", "blue-value-decrement", "blue-value-increment"];
    const previewSquare = dialog.querySelector(`.color-preview`);

    customColorsMap.forEach((id) => {
        const currentItem = dialog.querySelector(`.${id}`);
        currentItem.addEventListener("click", () => {
            incrementOrDecrementColorValue(currentItem, dialog)
            previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
        })
    })
}