import {
    pencilOptions
} from "../../data/variables.js";

import {
    userData
} from "../../data/userData.js";

import {
    setToPencil
} from "./setToPencil.js";

import {
    setToEraser
} from "./setToEraser.js";

/**
 * The function `setPencilOptions` adds event listeners to pencil options buttons and updates the user
 * data based on the selected option.
 */
export const setPencilOptions = () => {
    pencilOptions.forEach((button) => {
        button.addEventListener("click", () => {

            if ((button.id === "eraser") === (userData.eraser)) return;

            userData.eraser = !userData.eraser;

            if (userData.eraser) {
                setToEraser();
                return;
            }
    	    setToPencil();
        })
    })
}