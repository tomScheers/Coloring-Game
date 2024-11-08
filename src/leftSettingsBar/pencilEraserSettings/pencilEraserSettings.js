import { userData } from "../../data/userData.js";

import { setToPencil } from "./setToPencil.js";

import { setToEraser } from "./setToEraser.js";

export const setPencilOptions = () => {
    const pencilOptions = document.querySelectorAll(".pencil-type");
    pencilOptions.forEach((button) => {
        button.addEventListener("click", () => {
            if ((button.id === "eraser") === userData.eraser) return;

            // inverts the userData.eraser boolean
            userData.eraser = !userData.eraser;

            if (userData.eraser) {
                setToEraser();
            } else {
                setToPencil();
            }
        });
    });
};
