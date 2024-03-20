import { userData } from "../data/userData.js";

import {
    colorBrightnessButtons,
    colorBlurButtons,
    context,
} from "../data/variables.js";

import { setCircleColor } from "../data/functions.js";

export const setColorButtons = (buttons) => {
    buttons.forEach((button) => {
        button.style.backgroundColor = button.id;
        button.ariaLabel = `${button.id.split("-")[0]}-button`;

        button.addEventListener("click", () => {
            if (userData.eraser) return;
            const newColor = button.style.backgroundColor;
            if (!userData.colorMap.hasOwnProperty(button.id)) {
                userData.colorMap[button.id] = newColor;
            }
            const buttonsToDeselect =
                document.querySelectorAll(`.color-settings-icon`);

            buttonsToDeselect.forEach((b) => {
                b.classList.remove("selected-settings");
            });

            button.classList.add("selected-settings");

            context.strokeStyle = newColor;

            colorBlurButtons.forEach((b) => {
                const buttonBlurValue =
                    0.075 * (parseFloat(b.id.split("-")[1]) / 50);
                b.style.filter = `blur(${buttonBlurValue}rem)`;
                b.style.backgroundColor = newColor;
            });

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = newColor;
            });
            setCircleColor();
        });
    });
};
