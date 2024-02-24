import {
    userData
} from "../../userData.js";
import {
    colorBlurButtons
} from "../../variables.js";
import {
    blurMap
} from "../../arrayMap.js";
import {
    context
} from "../../variables.js";

/**
 * The function `setColorBlurButtons` sets the blur effect and background color for the blurButtons, updates
 * blur value in user data, and adds a selected class on button click.
 */
export const setColorBlurButtons = () => {
    colorBlurButtons.forEach((button) => {
        button.style.filter = `blur(${blurMap[button.id]}rem)`;
        button.style.backgroundColor = userData.currentColor;

        button.addEventListener("click", () => {
            const newBlur = blurMap[button.id];
            userData.blurVal = newBlur;
            context.filter = `blur(${newBlur}rem)`;

            colorBlurButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })
}