import {
    userData
} from "../../../userData.js";

import {
    dialogFunctionality
} from "./customColorSettings.js";

import {
    dialogList
} from "../../../variables.js";

import {
    setColorButtons
} from "../../colorSettings.js";


/**
 * The function `addSaveButtonFunctionality` adds functionality to a save button in a dialog box for
 * custom color settings.
 * @param dialog - The `dialog` parameter in the `addSaveButtonFunctionality` function 
 * represent a dialog element in the DOM. This function adds functionality to a save button within the
 * dialog. When the save button is clicked, it closes the dialog, updates the color of a button based
 * on custom colors stored
 */
export const addSaveButtonFunctionality = (dialog) => {
    const currentButton = document.getElementById(`custom-color${dialog.id.split("-")[1]}`);
    const previewSquare = document.querySelector(`#${dialog.id} .color-preview`);
    const saveButton = document.querySelector(`#${dialog.id} .save-button`);
    saveButton.addEventListener("click", () => {
        console.log("save button clicked!!!")
        dialog.close();
        currentButton.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
        currentButton.innerText = "";
        currentButton.classList.add("color-settings-icon");
        userData.colorMap[currentButton.id] = [userData.customColors[dialog.id].redVal, userData.customColors[dialog.id].greenVal, userData.customColors[dialog.id].blueVal]
        const nextButton = document.getElementById(`custom-color${parseInt(dialog.id.split("-")[1]) + 1}`);
        nextButton.innerText = "+";
        dialogFunctionality(dialogList[parseInt(dialog.id.split("-")[1])]);
        setColorButtons(([currentButton]));
        nextButton.classList.remove("hidden");
        nextButton.classList.add("color-setting-square");
        previewSquare.style.backgroundColor = "rgb(0,0,0)";
    })
}