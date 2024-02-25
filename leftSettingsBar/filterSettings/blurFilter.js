import {
    userData
} from "../../data/userData.js";
import {
    colorBlurButtons
} from "../../data/variables.js";
import {
    context
} from "../../data/variables.js";

/**
 * The function `setColorBlurButtons` sets the blur effect and background color for the blurButtons, updates
 * blur value in user data, and adds a selected class on button click.
 */
export const setColorBlurButtons = () => {
    colorBlurButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const newBlur = 0.075 * (parseFloat(button.id.split("-")[1]) / 50);
            userData.blurVal = newBlur;
            context.filter = `blur(${newBlur}rem)`;

            colorBlurButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })
}