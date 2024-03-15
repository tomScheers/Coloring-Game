import {
    userData
} from "../data/userData.js";

import {
    colorBrightnessButtons,
    colorBlurButtons,
    context
} from "../data/variables.js";

import {
    setCircleColor
} from "../data/functions.js";

export const setColorButtons = (buttons) => {
    buttons.forEach((button) => {
        button.ariaLabel = `${button.id.split("-")[0]}-button`;
        
        button.addEventListener("click", () => {
            if (userData.eraser) return;
            const newColor = userData.colorMap[button.id];
            const buttonsToDeselect = document.querySelectorAll(`.color-settings-icon`);

            buttonsToDeselect.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
            userData.colorValues = [newColor[0], newColor[1], newColor[2]];
            console.log(userData.colorValues);
            setCircleColor();
            context.strokeStyle = userData.colorValues;

            colorBlurButtons.forEach((b) => {
                const buttonBlurValue = 0.075 * (parseFloat(b.id.split("-")[1]) / 50);
                b.style.filter = `blur(${buttonBlurValue}rem)`;
                b.style.backgroundColor = userData.colorValues;
            })

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = userData.colorValues;
            })
        })
    })

}