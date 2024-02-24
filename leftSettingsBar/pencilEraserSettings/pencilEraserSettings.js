import {
    pencilOptions
} from "../../variables.js";

import {
    userData
} from "../../userData.js";

import {
    ifEraser
} from "./ifEraser.js";

import {
    ifPencil
} from "./ifPencil.js";

/**
 * The function `setPencilOptions` adds event listeners to pencil options buttons and updates the user
 * data based on the selected option.
 */
export const setPencilOptions = () => {
    pencilOptions.forEach((button) => {
        button.addEventListener("click", () => {

            if ((button.id === "eraser") === (userData.eraser)) return;

            userData.eraser = button.id === "eraser";

            if (userData.eraser) {
                ifEraser(button);
            }

            ifPencil(button);
        })
    })
}