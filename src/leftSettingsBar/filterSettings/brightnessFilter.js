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
            userData.brightness = newBrightness;
            circle.style.filter = `brightness(${userData.brightness}%) blur(0.2rem)`;
            context.filter = `brightness(${userData.brightness}%) blur(${userData.blurVal}rem)`;

            colorBrightnessButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })
}