
/**
 * The function `makeInputFieldsFunctional` adds event listeners to number input fields to trigger a
 * change via input in a dialog.
 * @param dialog - The `dialog` parameter in the `makeInputFieldsFunctional` function is likely a
 * reference to a dialog box or modal element in the user interface. This parameter is used within the
 * function to interact with the dialog box when input fields are changed or when certain events occur.
 */
export const makeInputFieldsFunctional = (dialog) => {
    const customColorsInputElements = document.querySelectorAll('input[type=number]');
    customColorsInputElements.forEach((input) => {
        input.addEventListener('blur', changeViaInput(input, dialog));
        input.addEventListener("keydown", () => {
            if (event.keyCode === 13) {
                input.blur();
                changeViaInput(input, dialog);
            }
        })
    });
}