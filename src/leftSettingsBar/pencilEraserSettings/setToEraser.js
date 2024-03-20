import {
    setCircleCircumference,
    getRadius,
    setCircleColor,
} from "../../data/functions.js";

import { context, circle } from "../../data/variables.js";

import { userData } from "../../data/userData.js";

import { lockColorButtons } from "./eraserSettings/lockColorButtons.js";

import { lockColorBlurButtons } from "./eraserSettings/lockBlurButtons.js";

import { lockBrightnessButtons } from "./eraserSettings/lockBrightnessButtons.js";

import { lockCustomColorButtons } from "./eraserSettings/lockCustomButtons.js";

export const setToEraser = () => {
    setCircleCircumference(getRadius());

    context.lineWidth = getRadius(userData.size) * 10;
    context.filter = userData.blurValue;
    context.strokeStyle = userData.lockedSquareColorValues;

    setCircleColor("white");
    circle.style.opacity = 0.8;
    circle.style.filter = "blur(0.2rem)";

    lockColorButtons();
    lockColorBlurButtons();
    lockBrightnessButtons();
    lockCustomColorButtons();
};
