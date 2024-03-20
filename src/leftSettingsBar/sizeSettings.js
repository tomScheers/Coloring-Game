import { userData } from "../data/userData.js";

import { context } from "../data/variables.js";

import { getRadius, setCircleCircumference } from "../data/functions.js";

export const setSizeButtons = () => {
    const sizeButtons = document.querySelectorAll(".size-option");
    sizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedSizeValue = button.value;
            userData.size = selectedSizeValue;

            if (userData.eraser) {
                setCircleCircumference(getRadius());
                context.lineWidth = getRadius(userData.size) * 10;
                return;
            }

            setCircleCircumference(getRadius());
            context.lineWidth = getRadius(userData.size) * 2;
        });
    });
};
