import {
    changeViaInput
} from "./changeViaInput.js";

export const makeInputFieldsFunctional = (dialog) => {
    const customColorsInputElements = dialog.querySelectorAll("input[type=number]");
    customColorsInputElements.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value === "") return;
            input.value = parseFloat(input.value);
        });

        input.addEventListener("blur", () => {
            input.blur();
            changeViaInput(input, dialog)
        });

        input.addEventListener("keydown", () => {
            if (event.keyCode === 13) {
                input.blur();
                changeViaInput(input, dialog);
            }
        });
    });
}