import {
    userData
} from "../../data/userData.js";

import {
    colorBlurButtons
} from "../../data/variables.js";

import {
    context
} from "../../data/variables.js";

export const setColorBlurButtons = () => {
    colorBlurButtons.forEach((button) => {
        button.ariaLabel = `${button.id}-button`;
        
        button.addEventListener("click", () => {
            const buttonBlurValue = parseInt(button.id.split("-")[1]);
            const newBlur = 0.075 * (buttonBlurValue / 50);
            userData.blurVal = newBlur;
            context.filter = `blur(${newBlur}rem) brightness(${userData.brightness}%)`;

            colorBlurButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })
}