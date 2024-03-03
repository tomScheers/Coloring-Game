import {
    userData
} from "./userData.js";

import {
    circle
} from "./variables.js";


/**
 * The function `updateCurrentColor` updates the `currentColor` property in the `userData` object with
 * the RGB values provided.
 */
const updateCurrentColor = () => {
    userData.currentColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
}

/**
 * The function `getRadius` returns a numerical value based on the size provided in the `userData`
 * object.
 * @returns The `getRadius` function returns the radius based on the size provided in the `userData`
 * object. The radius returned depends on the size value as follows:
 * - "super-small": 0.5
 * - "small": 1
 * - "medium": 2
 * - "big": 3
 * - "super-big": 4
 */
const getRadius = () => {
    switch (userData.size) {
        case "super-small":
            return 0.5;
        case "small":
            return 1;
        case "medium":
            return 2;
        case "big":
            return 3;
        case "super-big":
            return 4;
    }
};

/**
 * The `getMousePos` function returns the x and y coordinates of the mouse pointer based on the
 * client's event.
 * @param event - The `event` parameter is an object that represents an event being handled, such as a
 * mouse click or movement event. In this context, it is used to retrieve the current position of the
 * mouse cursor on the screen.
 * @returns An object with the properties `x` and `y`, representing the x and y coordinates of the
 * mouse pointer in the event.
 */
const getMousePos = (event) => {
    return {
        x: event.clientX,
        y: event.clientY
    };
};


const setCircleCircumference = (s) => {
    circle.style.width = `${s}rem`;
    circle.style.height = `${s}rem`;
}

const setCircleColor = (color = userData.currentColor) => {
    circle.style.backgroundColor = color;
}

export {
    updateCurrentColor,
    getMousePos,
    getRadius,
    setCircleCircumference,
    setCircleColor
};