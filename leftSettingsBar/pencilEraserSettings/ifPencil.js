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
    userData
} from "../../userData.js";

/**
 * The `ifPencil` function sets various properties and styles based on user data for a drawing tool.
 * @returns Nothing is being explicitly returned from the `ifPencil` function. The function is setting
 * various properties and styles on elements and buttons based on the `userData` values, but it does
 * not have a return value specified, this is to escape the forEach.
 */
export const ifPencil = () => {

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

    return;
}