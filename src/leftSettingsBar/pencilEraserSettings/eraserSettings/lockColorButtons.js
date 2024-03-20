import { setToLocked } from "./buttonToLocked.js";

export const lockColorButtons = () => {
    const colorButtons = document.querySelectorAll(".color-settings-icon");

    colorButtons.forEach((b) => {
        setToLocked(b);
        b.classList.remove("selected-settings");
    });
};
