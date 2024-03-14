import {
    userData
} from "../../data/userData.js";

import {
    dialogFunctionality
} from "./customColorSettings.js";

import {
    setColorButtons
} from "../colorSettings.js";


export const addSaveButtonFunctionality = (dialog) => {
    const currentButton = document.getElementById(`custom-color${dialog.id.split("-")[1]}`);
    const previewSquare = dialog.querySelector(`.color-preview`);
    const saveButton = dialog.querySelector(`.save-button`);

    saveButton.addEventListener("click", () => {
        dialog.close();

        currentButton.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
        currentButton.innerText = "";
        currentButton.classList.add("color-settings-icon");

        userData.colorMap[currentButton.id] = [userData.customColors[dialog.id].redVal, userData.customColors[dialog.id].greenVal, userData.customColors[dialog.id].blueVal];
        const nextButton = document.getElementById(`custom-color${parseInt(dialog.id.split("-")[1]) + 1}`);

        if (nextButton === null) return;

        nextButton.innerText = "+";
        const nextDialog = document.getElementById(`dialog-${[parseInt(dialog.id.split("-")[1]) + 1]}`);
        dialogFunctionality(nextDialog);
        setColorButtons(([currentButton]));
        nextButton.classList.remove("hidden");
        nextButton.classList.add("color-setting-square");
        previewSquare.style.backgroundColor = "rgb(0,0,0)";
    })
}