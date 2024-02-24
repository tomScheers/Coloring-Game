import {
    colorBrightnessButtons
} from "../../variables.js";
import {
    userData
} from "../../userData.js";
import {
    circle,
    context
} from "../../variables.js";
import {
    brightnessMap
} from "../../arrayMap.js";

/**
 * The function `setColorBrightnessButtons` sets the background color of the brightness buttons to the current color,
 * updates brightness settings on button click, and applies corresponding styles.
 */

export const setColorBrightnessButtons = () => {
    colorBrightnessButtons.forEach((button) => {
        button.style.backgroundColor = userData.currentColor;

        button.addEventListener("click", () => {
            if (userData.eraser) return;
            const newBrightness = brightnessMap[button.id];
            userData.brightness = newBrightness;
            circle.style.filter = `brightness(${userData.brightness}%) blur(0.2rem)`;
            context.filter = `brightness(${userData.brightness}%) blur(${userData.blurVal}rem)`;

            colorBrightnessButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })
}