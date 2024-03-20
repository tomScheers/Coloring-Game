import { userData } from "../../data/userData.js";

export const openCloseDialog = (dialog) => {
    const currentButton = document.getElementById(
        `custom-color${dialog.id.split("-")[1]}`
    );

    const showButton = document.getElementById(
        `custom-color${dialog.id.split("-")[1]}`
    );

    const closeButton = dialog.querySelector(`.close-button`);

    showButton.addEventListener("click", () => {
        if (
            currentButton.classList.contains("color-settings-icon") ||
            userData.eraser
        )
            return;
        dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });
};
