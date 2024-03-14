import {
    setCircleCircumference,
    getRadius
} from "../data/functions.js";
import {
    userData
} from "../data/userData.js";

export const setSettingsButton = () => {
    const settingsButton = document.getElementById("settings-button");

    // if the settings button is clicked, show the settings dialog
    settingsButton.addEventListener("click", () => {
        const dialog = document.getElementById("settings-dialog");
        dialog.showModal();
    })

    const closeButton = document.getElementById("settings-exit-button");
    
    // if the close button is clicked, close the settings dialog
    closeButton.addEventListener("click", () => {
        const dialog = document.getElementById("settings-dialog");
        dialog.close();
    })
    const nameInput = document.getElementById("name-input");
    const authorInput = document.getElementById("author-input");
    const saveButton = document.getElementById("settings-save-button");
    const cursorBlobButton = document.getElementById("setting-cursor-blob");

    // if the save button is clicked, close the settings dialog and save the settings to the user's settings
    saveButton.addEventListener("click", () => {
        const dialog = document.getElementById("settings-dialog");
        dialog.close();
        userData.userSettings.fileName = nameInput.value || userData.userSettings.fileName;
        userData.userSettings.author = authorInput.value || userData.userSettings.author;
        userData.blob = cursorBlobButton.checked;
        if (cursorBlobButton.checked) {
            setCircleCircumference(getRadius());
        } else {
            setCircleCircumference(0);
        }
        console.log(userData.userSettings.fileName);
        console.log(userData.userSettings.author);
    })
}