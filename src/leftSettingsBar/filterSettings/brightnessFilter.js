import {
    colorBrightnessButtons
} from "../../data/variables.js";

import {
    userData
} from "../../data/userData.js";

import {
    circle,
    context
} from "../../data/variables.js";

export const setColorBrightnessButtons = () => {
    colorBrightnessButtons.forEach((button) => {
        button.ariaLabel = `${button.id}-button`;

        button.addEventListener("click", () => {
            if (userData.eraser) return;
            const newBrightness = parseInt(button.id.split("-")[1]);
            userData.brightnessValue = newBrightness;
            circle.style.filter = userData.filterValues;
            context.filter = userData.filterValues;

            colorBrightnessButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })
}