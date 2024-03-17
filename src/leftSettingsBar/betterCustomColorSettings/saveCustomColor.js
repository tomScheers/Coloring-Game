import { userData } from "../../data/userData.js";

import { customColorFunctionality } from "./customColorFunctionality.js";

import { setColorButtons } from "../colorSettings.js";


export const saveCustomColor = (dialog) => {
    const currentButton = document.getElementById(
        `custom-color${dialog.id.split("-")[1]}`
    );

    const saveButton = dialog.querySelector(`.save-button`);



    saveButton.addEventListener("click", () => {
        const colorPicker = dialog.querySelector(`.custom-color-input-picker`);
        console.log(colorPicker.value)
        dialog.close();

        currentButton.style.backgroundColor = colorPicker.value;
        currentButton.innerText = "";
        currentButton.classList.add("color-settings-icon");

        const nextButton = document.getElementById(
            `custom-color${parseInt(dialog.id.split("-")[1]) + 1}`
        );

        if (nextButton === null) return;

        nextButton.innerText = "+";
        const nextDialog = document.getElementById(
            `dialog-${[parseInt(dialog.id.split("-")[1]) + 1]}`
        );
        customColorFunctionality(nextDialog);
        setColorButtons([currentButton]);
        nextButton.classList.remove("hidden");
        nextButton.classList.add("color-setting-square");
    });
}