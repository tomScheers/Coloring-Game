import { setCircleCircumference, getRadius } from "../../data/functions.js";

import { userData } from "../../data/userData.js";

import { createMouseListener } from "../../blurCircleAroundMouser.js";

import { showSettingsDialogOnClick } from "./showUserSettings.js";

import { exitSettingsOnClick } from "./exitSettingsButton.js";

export const setSettingsButton = () => {
    showSettingsDialogOnClick();
    exitSettingsOnClick();
    const nameInput = document.getElementById("name-input");
    const authorInput = document.getElementById("author-input");
    const saveButton = document.getElementById("settings-save-button");
    const cursorBlobButton = document.getElementById("setting-cursor-blob");

    saveButton.addEventListener("click", () => {
        const dialog = document.getElementById("settings-dialog");
        dialog.close();

        userData.userSettings.theUsersSettings = {
            fileName: nameInput.value || userData.userSettings.fileName,
            author: authorInput.value || userData.userSettings.author,
            blob: cursorBlobButton.checked,
        };

        if (cursorBlobButton.checked) {
            setCircleCircumference(getRadius());
            circle.style.backgroundColor = userData.colorValues;
            document.addEventListener("mousemove", createMouseListener);
            return;
        }
        setCircleCircumference(0);
        document.removeEventListener("mousemove", createMouseListener);
    });
};
