import {
    setColorButtons
} from "./leftSettingsBar/colorSettings.js";

import {
    dialogList,
    colorButtons,
} from "./data/variables.js";

import {
    dialogFunctionality
}
from "./leftSettingsBar/customColorsSettings/customColorSettings.js";

import {
    setSizeButtons
} from "./leftSettingsBar/sizeSettings.js";

import {
    setPencilOptions
} from "./leftSettingsBar/pencilEraserSettings/pencilEraserSettings.js";

import {
    setCircleCircumference,
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

document.addEventListener("DOMContentLoaded", () => {
    setCircleCircumference();
    setPencilOptions();
    setSizeButtons();
    setColorBlurButtons();
    setColorBrightnessButtons();
    setColorButtons(colorButtons);
    dialogFunctionality(dialogList[0]);
    addDrawEventListeners(getRadius());
    document.addEventListener("mousemove", createMouseListener);


});