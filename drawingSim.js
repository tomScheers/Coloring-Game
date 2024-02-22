import {
    userData
} from './userData.js';
import {
    setColorButtons
} from './leftSettingsBar/colorSettings.js';
import {
    dialogList,
    colorButtons,
    colorBrightnessButtons,
    colorBlurButtons,
    sizeButtons,
    canvas,
    context,
    circle
} from "./variables.js";
import {
    dialogFunctionality
} from './leftSettingsBar/customColorSettings.js';
import {
    blurMap,
    brightnessMap
} from "./arrayMap.js";
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
    getMousePos,
    getRadius
} from './functions.js';
document.addEventListener("DOMContentLoaded", () => {
    circle.id = "circle";
    circle.style.background = userData.currentColor;

    const setCircleCircumference = (s) => {
        circle.style.width = `${s}rem`;
        circle.style.height = `${s}rem`;
    }

    setCircleCircumference(getRadius());
    document.body.appendChild(circle);

    setPencilOptions();

    setSizeButtons(sizeButtons);
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
    setColorButtons();

    colorBrightnessButtons.forEach((button) => {
        button.style.backgroundColor = userData.currentColor;

        button.addEventListener("click", () => {
            if (userData.eraser) return;
            const newBrightness = brightnessMap[button.id];
            userData.brightness = newBrightness;
            circle.style.filter = `brightness(${userData.brightness}%) blur(0.2rem)`;
            context.filter = `brightness(${userData.brightness}%) blur(${userData.blurVal}rem)`;

            colorBrightnessButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })
    document.addEventListener("mousemove", (event) => {
        const mousePos = getMousePos(event);
        circle.style.left = `calc(${mousePos.x}px - ${circle.style.width} / 2)`;
        circle.style.top = `calc(${mousePos.y}px - ${circle.style.height} / 2)`;
    });

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);


    dialogFunctionality(dialogList[0]);
});