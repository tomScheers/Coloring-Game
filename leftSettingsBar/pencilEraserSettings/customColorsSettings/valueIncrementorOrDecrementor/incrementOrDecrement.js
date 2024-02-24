import {
    customColorsMap
} from "../../../../arrayMap.js";

import {
    userData
} from "../../../../userData.js";


/**
 * The function `incrementOrDecrement` increments or decrements the value of an input element based on 
 * conditions related to custom colors and user data.
 * @param currentItem - The `currentItem` parameter is a node list representing the current item being
 * interacted with in the code.
 * @param dialog - The `dialog` parameter is an object representing a dialog element in the
 * DOM. It is used to access specific elements within the dialog for updating values based on the logic
 * in the `incrementOrDecrement` function.
 * @returns If the condition in the `if` statement is met, either `inputElement.value--` or
 * `inputElement.value++` is being returned, depending on whether the index of `currentItem.id` in the
 * `customColorsMap` array is even or odd.
 */
export const incrementOrDecrement = (currentItem, dialog) => {
    const propKey = `${currentItem.className.split("-")[0]}Val`;
    const inputElement = document.querySelector(`#${dialog.id} .${currentItem.parentNode.classList} input`);

    if (customColorsMap.indexOf(currentItem.id) % 2 === 0) {
        if (parseFloat(inputElement.value) - 1 < inputElement.min) return;
        inputElement.value--;
        userData.customColors[dialog.id][propKey]--;
    } else {
        if (parseFloat(inputElement.value) + 1 > inputElement.max) return;
        inputElement.value++;
        userData.customColors[dialog.id][propKey]++;
    }

}