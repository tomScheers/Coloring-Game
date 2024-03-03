import {
    userData,
    setNewValues
} from "../data/userData.js";

import {
    colorBrightnessButtons,
    colorBlurButtons,
    context,
    circle
} from "../data/variables.js";

import {
    updateCurrentColor,
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
            setNewValues(newColor[0], newColor[1], newColor[2]);
            updateCurrentColor();
            setCircleColor()
            context.strokeStyle = userData.currentColor;

            colorBlurButtons.forEach((b) => {
                const buttonBlurValue = 0.075 * (parseFloat(b.id.split("-")[1]) / 50);
                b.style.filter = `blur(${buttonBlurValue}rem)`;
                b.style.backgroundColor = userData.currentColor;
            })

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = userData.currentColor;
            })
        })
    })

}