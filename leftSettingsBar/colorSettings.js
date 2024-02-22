import {
    userData
}
from '../userData.js';
import {
    colorBrightnessButtons,
    colorBlurButtons,
    context,
    circle,
    colorButtons
} from "../variables.js";
import {
    blurMap,
} from "../arrayMap.js"
import { updateCurrentColor } from '../functions.js';

export const setColorButtons = () => {
    colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (userData.eraser) return;
            console.log(button.id)
            const newColor = userData.colorMap[button.id];
            const buttonsToDeselect = document.querySelectorAll(`.color-settings-icon`)
            buttonsToDeselect.forEach((b) => {
                b.classList.remove("selected-settings");
            })
            console.log(newColor)
            button.classList.add("selected-settings");
            userData.redVal = newColor[0];
            userData.greenVal = newColor[1];
            userData.blueVal = newColor[2];
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