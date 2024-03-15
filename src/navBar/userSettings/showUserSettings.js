
export const showSettingsDialogOnClick = () => {
    const settingsButton = document.getElementById("settings-button");
    settingsButton.addEventListener("click", () => {
        const dialog = document.getElementById("settings-dialog");
        dialog.showModal();
    });
}