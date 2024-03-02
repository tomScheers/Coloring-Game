import {
    userData
} from "./userData.js";
import {
    circle
} from "./variables.js";
const updateCurrentColor = () => {
    userData.currentColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
}
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
const getMousePos = (event) => {
    return {
        x: event.clientX,
        y: event.clientY
    };
};
const setCircleCircumference = (s) => {
    circle.style.width = `${s}rem`;
    circle.style.height = `${s}}rem`;
}
export {
    updateCurrentColor,
    getMousePos,
    getRadius,
    setCircleCircumference
};