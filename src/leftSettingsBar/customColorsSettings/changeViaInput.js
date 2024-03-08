import {
    userData
} from "../../data/userData.js";

/**
 * The function `changeViaInput` updates a color preview square based on user input within specified
 * min and max values.
 * @param elem - The `elem` parameter in the `changeViaInput` function represents an input element in
 * the HTML document. It is used to capture user input and update the color preview based on the
 * entered values.
 * @param dialog - The `dialog` parameter seems to be an object that contains an `id` property. This
 * `id` property is used to select elements within the document. In the provided code snippet, it is
 * used to find the color preview square element within the dialog using its ID.
 */
export const changeViaInput = (elem, dialog) => {
    const previewSquare = dialog.querySelector(`.color-preview`);
    const enteredValue = parseFloat(elem.value);

    if (enteredValue < parseFloat(elem.min) || elem.value.length <= 0) {
        elem.value = elem.min;
    }

    if (enteredValue > parseFloat(elem.max)) {
        elem.value = elem.max;
    }

    elem.value = parseFloat(elem.value) + 0;
    const valKey = `${elem.classList[0].split("-")[0]}Val`;
    userData.customColors[dialog.id][valKey] = elem.value;
    previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
}