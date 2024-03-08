import {
    userData
} from "../../data/userData.js";
/**
 * The function `createDialogCloseAndOpenButtons` creates event listeners for opening and closing a
 * dialog element based on button clicks.
 * @param dialog - The `dialog` parameter in the `createDialogCloseAndOpenButtons` function represents
 * a dialog element in the DOM. This dialog element is used to display a modal dialog box on the web
 * page. The function creates event listeners for a show button and a close button associated with the
 * dialog element. When
 */
export const createDialogCloseAndOpenButtons = (dialog) => {
    const currentButton = document.getElementById(`custom-color${dialog.id.split("-")[1]}`);
    const showButton = document.querySelector(`#custom-color${dialog.id.split("-")[1]}`);
    const closeButton = dialog.querySelector(`.close-button`);

    showButton.addEventListener("click", () => {
        if (currentButton.classList.contains("color-settings-icon") || userData.eraser) return;
        dialog.showModal();
    });
    closeButton.addEventListener("click", () => {
        dialog.close();
    });
}