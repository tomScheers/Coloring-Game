import {
    setCircleCircumference,
    getRadius,
    setCircleColor
} from "../../data/functions.js";

import {
    context,
    colorBlurButtons,
    colorButtons,
    colorBrightnessButtons,
    customColorButtons,
    circle
} from "../../data/variables.js";

import {
    userData
} from "../../data/userData.js";

const setToLocked = (button) => {
    button.style.backgroundColor = `rgb(${userData.lockedSquareColor[0]}, ${userData.lockedSquareColor[1]}, ${userData.lockedSquareColor[2]})`
}

/**
 * The `setToEraser` function sets various properties and styles based on user data for a drawing tool.
 * @returns Nothing is being explicitly returned from the `setToEraser` function. The function is setting
 * various properties and styles on elements and buttons based on the `userData` values, but it does
 * not have a return value specified, this is to escape the forEach.
 */
export const setToEraser = () => {
    setCircleCircumference(getRadius() * 1.5);
    context.lineWidth = getRadius(userData.size) * 10;
    context.filter = `blur(${userData.blurVal}rem)`;
    context.strokeStyle = `rgb(${userData.lockedSquareColor[0]}, ${userData.lockedSquareColor[1]}, ${userData.lockedSquareColor[2]})`;
    setCircleColor("white");
    circle.style.opacity = 0.8;
    circle.style.filter = "blur(0.2rem)";
    colorButtons.forEach((b) => {
        setToLocked(b);
        b.classList.remove("selected-settings");
    })

    colorBlurButtons.forEach((b) => {
        setToLocked(b);
    })

    colorBrightnessButtons.forEach((b) => {
        setToLocked(b);
        b.classList.remove("selected-settings");
        b.classList.add("eraser-light");
    })

    customColorButtons.forEach((button) => {
        if (button.classList.contains("color-setting-square") && !button.classList.contains("color-settings-icon")) {
            button.innerText = "X";
            return;
        }
        if (!button.classList.contains("color-settings-icon")) return;
        setToLocked(button);
        button.classList.remove("selected-settings");
    })
}