import {
    userData
} from "./userData.js";

import {
    circle
} from "./variables.js";

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


/**
 * The function `setCircleCircumference` sets the width and height of a circle element to a specified
 * size in rem units.
 * @param size - The parameter `size` in the `setCircleCircumference` function represents the size of the
 * circle in rem units. It is used to set the width and height of the circle element in the HTML to
 * create a circle with the specified circumference.
 */
const setCircleCircumference = (size) => {
    console.log(size);
    circle.style.width = `${size}rem`;
    circle.style.height = `${size}rem`;
}

/**
 * The setCircleColor function sets the background color of a circle element to a specified color or
 * the current color from user data.
 * @param [color] - The `color` parameter in the `setCircleColor` function is a parameter that allows
 * you to specify the color you want to set for the background color of the circle element. If no color
 * is provided when calling the function, it will default to `userData.currentColor`.
 */
const setCircleColor = (color = userData.colorValues) => {
    circle.style.backgroundColor = color;
}

export {
    getMousePos,
    getRadius,
    setCircleCircumference,
    setCircleColor
};