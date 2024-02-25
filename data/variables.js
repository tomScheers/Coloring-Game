import {
    userData
} from "./userData.js";
const dialogList = document.querySelectorAll("dialog");
const colorButtons = document.querySelectorAll(".color-settings-icon");
const colorBrightnessButtons = document.querySelectorAll(".light-square");
const colorBlurButtons = document.querySelectorAll(".blur-square");
const sizeButtons = document.querySelectorAll(".size-option");
const customColorButtons = document.querySelectorAll(".custom")
const pencilOptions = document.querySelectorAll(".pencil-type")
const canvas = document.getElementById('drawing-canvas');
const context = canvas.getContext('2d');
const circle = document.createElement("div");
circle.id = "circle";
circle.style.background = userData.currentColor;
document.body.appendChild(circle);
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