import { userData } from "./userData.js";

import { setCircleColor, setCircleCircumference } from "./functions.js";

const colorBrightnessButtons = document.querySelectorAll(".light-square");
const colorBlurButtons = document.querySelectorAll(".blur-square");
let canvas = document.getElementById("drawing-canvas");

const context = canvas.getContext("2d", {
    willReadFrequently: true,
});

const circle = document.getElementById("circle");
setCircleColor();
if (userData.userSettings.blob) {
    setCircleCircumference(2);
}

export { colorBrightnessButtons, colorBlurButtons, canvas, context, circle };
