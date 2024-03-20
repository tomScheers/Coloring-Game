import {
    userData
} from "./data/userData.js";

import {
    setColorButtons
} from "./leftSettingsBar/colorSettings.js";

import {
    setSizeButtons
} from "./leftSettingsBar/sizeSettings.js";

import {
    setPencilOptions
} from "./leftSettingsBar/pencilEraserSettings/pencilEraserSettings.js";

import {
    getRadius
} from "./data/functions.js";

import {
    setColorBlurButtons
} from "./leftSettingsBar/filterSettings/blurFilter.js";

import {
    setColorBrightnessButtons
} from "./leftSettingsBar/filterSettings/brightnessFilter.js";

import {
    createMouseListener
} from "./blurCircleAroundMouser.js";

import {
    addDrawEventListeners
} from "./drawing/drawingFunctionality.js";

import {
    addNavButtons
} from "./navBar/addButtons.js";

import { customColorFunctionality } from "./leftSettingsBar/betterCustomColorSettings/customColorFunctionality.js";

document.addEventListener("DOMContentLoaded", () => {
    setPencilOptions();
    setSizeButtons();
    setColorBlurButtons();
    setColorBrightnessButtons();
    setColorButtons(document.querySelectorAll(".color-settings-icon"));
    customColorFunctionality(document.getElementById("dialog-1"));
    addDrawEventListeners(getRadius());
    addNavButtons();
    if (userData.blob) {
        document.addEventListener("mousemove", createMouseListener);
    }
});