export const exitSettingsOnClick = () => {
    const closeButton = document.getElementById("settings-exit-button");
    closeButton.addEventListener("click", () => {
        const dialog = document.getElementById("settings-dialog");
        dialog.close();
    });
};
