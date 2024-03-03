import {
    setCircleColor,
    setCircleCircumference
} from "./functions.js";

const dialogList = document.querySelectorAll("dialog");
const colorButtons = document.querySelectorAll(".color-settings-icon");
const colorBrightnessButtons = document.querySelectorAll(".light-square");
const colorBlurButtons = document.querySelectorAll(".blur-square");
const sizeButtons = document.querySelectorAll(".size-option");
const customColorButtons = document.querySelectorAll(".custom")
const pencilOptions = document.querySelectorAll(".pencil-type")
const canvas = document.getElementById("drawing-canvas");
const context = canvas.getContext("2d");
const circle = document.getElementById("circle");

setCircleColor();
setCircleCircumference(2);

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