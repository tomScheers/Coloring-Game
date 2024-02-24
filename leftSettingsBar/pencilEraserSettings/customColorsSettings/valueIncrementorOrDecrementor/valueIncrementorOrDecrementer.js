import {
    incrementOrDecrement
} from "./incrementOrDecrement.js";

import {
    userData
} from "../../../../userData.js";

import {
    customColorsMap
} from "../../../../arrayMap.js";

/**
 * The function `incrementOrDecrementCustomColorValues` iterates over custom color elements in a
 * dialog, adds an event listener to each element to increment or decrement its value, and updates a
 * preview square's background color accordingly.
 * @param dialog - The `dialog` parameter is an object that contains an `id` property. This
 * `id` property is used to select elements within the document.
 */
export const incrementOrDecrementCustomColorValues = (dialog) => {
    customColorsMap.forEach((id) => {
        const currentItem = document.querySelector(`#${dialog.id} .${id}`);
        currentItem.addEventListener("click", () => {
            incrementOrDecrement(currentItem, dialog)
            previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
        })
    })
}