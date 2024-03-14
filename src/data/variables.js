import { userData } from "./userData.js";

import {
    setCircleColor,
    setCircleCircumference
} from "./functions.js";

const dialogList = document.querySelectorAll(".dialog-element");
const colorButtons = document.querySelectorAll(".color-settings-icon");
const colorBrightnessButtons = document.querySelectorAll(".light-square");
const colorBlurButtons = document.querySelectorAll(".blur-square");
const sizeButtons = document.querySelectorAll(".size-option");
const customColorButtons = document.querySelectorAll(".custom")
const pencilOptions = document.querySelectorAll(".pencil-type")
let canvas = document.getElementById("drawing-canvas");
const context = canvas.getContext("2d", {
    willReadFrequently: true,
});
const circle = document.getElementById("circle");
setCircleColor();
if (userData.userSettings.blob) {

    setCircleCircumference(2);
}


export {
    dialogList,
    colorButtons,
    colorBrightnessButtons,
    colorBlurButtons,
    sizeButtons,
    pencilOptions,
    canvas,
    context,
    circle,
    customColorButtons
}