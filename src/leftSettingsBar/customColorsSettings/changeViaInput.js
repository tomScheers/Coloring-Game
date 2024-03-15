import {
    userData
} from "../../data/userData.js";

export const changeViaInput = (elem, dialog) => {
    const previewSquare = dialog.querySelector(`.color-preview`);
    const enteredValue = parseFloat(elem.value);

    if (enteredValue < parseFloat(elem.min) || elem.value.length <= 0) {
        elem.value = elem.min;
    }

    if (enteredValue > parseFloat(elem.max)) {
        elem.value = elem.max;
    }

    elem.value = parseFloat(elem.value);
    const valKey = `${elem.classList[0].split("-")[0]}Val`;
    userData.customColors[dialog.id][valKey] = elem.value;
    previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
}