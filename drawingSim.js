import {
    setColorButtons
} from './leftSettingsBar/colorSettings.js';

import {
    dialogList,
    colorButtons,
    canvas
} from "./variables.js";

import {
    dialogFunctionality
} from './leftSettingsBar/customColorSettings.js';

import {
    setSizeButtons
} from './leftSettingsBar/sizeSettings.js';

import {
    startDrawing,
    stopDrawing,
    draw
} from './drawing/drawingFunctionality.js';

import {
    setPencilOptions
} from './leftSettingsBar/pencilEraserSettings.js';

import {
    getRadius,
    setCircleCircumference
} from './functions.js';

import { setColorBlurButtons } from './leftSettingsBar/filterSettings/blurFilter.js';

import { setColorBrightnessButtons } from './leftSettingsBar/filterSettings/brightnessFilter.js';

import { createMouseListener } from './blurCircleAroundMouser.js';

document.addEventListener("DOMContentLoaded", () => {
    setCircleCircumference(getRadius());
    setPencilOptions();
    setSizeButtons();
    setColorBlurButtons();
    setColorBrightnessButtons();
    setColorButtons(colorButtons);
    dialogFunctionality(dialogList[0]);

    document.addEventListener("mousemove", createMouseListener);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    

});