import { userData } from "../../userData.js";
import { colorBlurButtons } from "../../variables.js";
import { blurMap } from "../../arrayMap.js";
import { context } from "../../variables.js";

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
