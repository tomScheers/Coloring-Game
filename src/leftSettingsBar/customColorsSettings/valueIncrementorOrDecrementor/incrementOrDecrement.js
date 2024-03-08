import {
    userData
} from "../../../data/userData.js";

/**
 * The function `incrementOrDecrement` increments or decrements a value in an input element based on
 * the class of the clicked item.
 * @param currentItem - The `currentItem` parameter is an object representing the current item being
 * interacted with in the UI. It contains information such as the class name, parent node, and other
 * properties related to the item.
 * @param dialog - The `dialog` parameter seems to be an object representing a dialog element in the
 * DOM. It is used to access specific elements within the dialog for updating values based on the
 * `currentItem` passed to the `incrementOrDecrement` function.
 * @returns If the condition in the `if` statement is met (either the value of `inputElement` plus 1 is
 * greater than `inputElement.max` in the increment case, or the value of `inputElement` minus 1 is
 * less than `inputElement.min` in the decrement case), then the function will return early without
 * making any changes.
 */
export const incrementOrDecrement = (currentItem, dialog) => {
    const propKey = `${currentItem.className.split("-")[0]}Val`;
    const inputElement = dialog.querySelector(`.${currentItem.parentNode.classList[0]} input`);
    const isIncrement = currentItem.classList[0].split("-").includes("increment");

    if (isIncrement) {
        const newValIsOverMax = parseFloat(inputElement.value) + 1 > inputElement.max;
        if (newValIsOverMax) return;
        inputElement.value++;
        userData.customColors[dialog.id][propKey]++;
        return;
    }

    const newValIsUnderMin = parseFloat(inputElement.value) - 1 < inputElement.min;
    if (newValIsUnderMin) return;
    inputElement.value--;
    userData.customColors[dialog.id][propKey]--;

}