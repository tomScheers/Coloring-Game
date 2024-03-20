import {
    colorBrightnessButtons
} from "../../../data/variables.js";

import {
    setToLocked
} from "./buttonToLocked.js";

export const lockBrightnessButtons = () => {
    colorBrightnessButtons.forEach((b) => {
        setToLocked(b);
        b.classList.remove("selected-settings");
        b.classList.add("eraser-light");
    });
}