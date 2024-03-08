import {
    userData
} from "../data/userData.js";

export const setSettingsButton = () => {
    const settingsButton = document.getElementById("settings-button");
    settingsButton.addEventListener("click", () => {
        const dialog = document.getElementById("settings-dialog");
        dialog.showModal();
    })

    const closeButton = document.getElementById("settings-exit-button");
    closeButton.addEventListener("click", () => {
        console.log("close settings");
        const dialog = document.getElementById("settings-dialog");
        dialog.close();
    })
    const nameInput = document.getElementById("name-input");
    const authorInput = document.getElementById("author-input");
    const saveButton = document.getElementById("settings-save-button");
    saveButton.addEventListener("click", () => {
        console.log("save settings");
        const dialog = document.getElementById("settings-dialog");
        dialog.close();
        userData.userSettings.fileName = nameInput.value || userData.userSettings.fileName;
        userData.userSettings.author = authorInput.value || userData.userSettings.author;
        console.log(userData.userSettings);
    })

    if (userData.userSettings.fileName !== "Untitled_Project") {
        nameInput.value = userData.userSettings.name;
    }

    if (userData.userSettings.author !== "Anonymous_User") {
        authorInput.value = userData.userSettings.author;
    }
}