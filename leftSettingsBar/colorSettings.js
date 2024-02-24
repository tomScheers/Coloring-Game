import {
    userData,
    setNewValues
} from '../userData.js';

import {
    colorBrightnessButtons,
    colorBlurButtons,
    context,
    circle
} from "../variables.js";

import {
    blurMap,
} from "../arrayMap.js";

import {
    updateCurrentColor
} from '../functions.js';

export const setColorButtons = (buttons) => {

    buttons.forEach((button) => {
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
            circle.style.background = userData.currentColor;
            context.strokeStyle = userData.currentColor;

            colorBlurButtons.forEach((b) => {
                b.style.filter = `blur(${blurMap[b.id]}rem)`;
                b.style.backgroundColor = userData.currentColor;
            })

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = userData.currentColor;
            })
        })
    })

}