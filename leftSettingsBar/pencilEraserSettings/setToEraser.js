import {
    setCircleCircumference,
    getRadius
} from "../../data/functions.js";

import {
    context,
    circle,
    colorBlurButtons,
    colorButtons,
    colorBrightnessButtons,
    customColorButtons,
} from "../../data/variables.js";

import {
    userData
} from "../../data/userData.js";

/**
 * The `ifPencil` function sets various properties and styles based on user data for a drawing tool.
 * @returns Nothing is being explicitly returned from the `ifPencil` function. The function is setting
 * various properties and styles on elements and buttons based on the `userData` values, but it does
 * not have a return value specified, this is to escape the forEach.
 */
export const setToEraser = () => {
    setCircleCircumference(getRadius() * 1.5);
    context.lineWidth = getRadius(userData.size) * 10;
    context.filter = `blur(${userData.blurVal}rem)`;
    context.strokeStyle = userData.lockedSquareColor;
    circle.style.background = userData.lockedSquareColor;

    colorButtons.forEach((b) => {
        b.style.backgroundColor = userData.lockedSquareColor;
        b.classList.remove("selected-settings")
    })

    colorBlurButtons.forEach((b) => {
        b.style.backgroundColor = userData.lockedSquareColor;
    })

    colorBrightnessButtons.forEach((b) => {
        b.style.backgroundColor = userData.lockedSquareColor;
        b.classList.remove("selected-settings");
        b.classList.add("eraser-light")
    })

    customColorButtons.forEach((button) => {
        if (button.classList.contains("color-setting-square") && !button.classList.contains("color-settings-icon")) {
            button.innerText = "X";
            return;
        }
        if (!button.classList.contains("color-settings-icon")) return;
        button.style.backgroundColor = userData.lockedSquareColor;
    })
}