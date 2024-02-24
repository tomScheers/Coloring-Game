import {
    setCircleCircumference,
    getRadius
} from "../../functions.js";

import {
    context,
    circle,
    colorBlurButtons,
    colorButtons,
    colorBrightnessButtons
} from "../../variables.js";

import {
    userData,
    setNewValues
} from "../../userData.js";

import {
    updateCurrentColor
} from "../../functions.js";

/**
 * The `ifEraser` function resets color buttons and settings to default values for an eraser tool in a
 * drawing application.
 * @param button - The `ifEraser` function takes a `button` parameter, which represents the button that
 * triggered the eraser mode. This function resets the color buttons, sets the color to red, updates
 * the current color, adjusts the circle size, and updates various styles and values to reflect the
 * eraser mode
 */
export const ifEraser = (button) => {
    colorButtons.forEach((b) => {
        b.classList.remove("selected-settings");
        const color = userData.colorMap[b.id];
        b.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    })

    colorButtons[0].classList.add("selected-settings");
    colorBrightnessButtons[0].classList.add("selected-settings");
    button.classList.add("selected-settings");

    setNewValues(255, 0, 0);
    updateCurrentColor();
    setCircleCircumference(getRadius() * 1.5);

    circle.style.background = userData.currentColor;
    context.strokeStyle = userData.currentColor;
    context.lineWidth = getRadius(userData.size) * 2;
    context.filter = `blur(${userData.blurVal}rem)`;

    colorBlurButtons.forEach((b) => {
        b.style.backgroundColor = userData.currentColor;
    })

    colorBrightnessButtons.forEach((b) => {
        b.style.backgroundColor = userData.currentColor;
        b.classList.remove("eraser-light");
    })
}