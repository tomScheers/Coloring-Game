import {
    setCircleCircumference,
    getRadius
} from "../../data/functions.js";

import {
    context,
    colorBlurButtons,
    colorBrightnessButtons
} from "../../data/variables.js";

import {
    userData
} from "../../data/userData.js";

import {
    setCircleColor
} from "../../data/functions.js";


/**
 * The function `setToPencil` in JavaScript sets various settings and colors for a drawing tool
 * interface.
 */
export const setToPencil = () => {
    const colorButtons = document.querySelectorAll(".color-settings-icon");
    const customColorButtons = document.querySelectorAll(".custom");

    colorButtons.forEach((b) => {
        b.classList.remove("selected-settings");
        const color = userData.colorMap[b.id];
        b.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    })

    // sets first button to be selected
    colorButtons[0].classList.add("selected-settings");
    colorBrightnessButtons[0].classList.add("selected-settings");

    userData.colorValues = [255, 0, 0];
    setCircleCircumference(getRadius());

    setCircleColor();
    circle.style.opacity = 0.3;
    context.strokeStyle = userData.colorValues;
    context.lineWidth = getRadius(userData.size) * 2;
    context.filter = `blur(${userData.blurVal}rem)`;

    colorBlurButtons.forEach((b) => {
        b.style.backgroundColor = userData.colorValues;
    })

    colorBrightnessButtons.forEach((b) => {
        b.style.backgroundColor = userData.colorValues;
        b.classList.remove("eraser-light");
    })

    customColorButtons.forEach((button) => {
        if (button.classList.contains("color-setting-square") && !button.classList.contains("color-settings-icon")) {
            button.innerText = "+";
            return;
        }
        if (!button.classList.contains("color-settings-icon")) return;
        const currentDialog = `dialog-${button.id.slice(-1)}`;
        const currentColorData = userData.customColors[currentDialog];
        button.style.backgroundColor = `rgb(${currentColorData.redVal}, ${currentColorData.greenVal}, ${currentColorData.blueVal})`;
    })
}