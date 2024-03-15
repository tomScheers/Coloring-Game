import {
    userData
} from "./userData.js";

import {
    circle
} from "./variables.js";

const getRadius = () => {
    switch (userData.size) {
        case "super-small":
            return 0.5;
        case "small":
            return 1.5;
        case "medium":
            return 3;
        case "big":
            return 5;
        case "super-big":
            return 7;
    }
};


const setCircleCircumference = (size) => {
    circle.style.width = `${size}rem`;
    circle.style.height = `${size}rem`;
}

const setCircleColor = (color = userData.colorValues) => {
    circle.style.backgroundColor = color;
}

export {
    getRadius,
    setCircleCircumference,
    setCircleColor
};