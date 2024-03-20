import { setToLocked } from "./buttonToLocked.js";

export const lockCustomColorButtons = () => {
    const customColorButtons = document.querySelectorAll(".custom");

    customColorButtons.forEach((button) => {
        if (button.textContent === "+") {
            button.innerText = "X";
            return;
        }

        const isHidden = !button.classList.contains("color-setting-icon");
        if (isHidden) return;
        setToLocked(button);
        button.classList.remove("selected-settings");
    });
};
