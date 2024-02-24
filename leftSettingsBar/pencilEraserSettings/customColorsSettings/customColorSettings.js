import {
    userData
} from "../../../userData.js";

import {
    incrementOrDecrementCustomColorValues
} from "./valueIncrementorOrDecrementor/valueIncrementorOrDecrementer.js";

import {
    addSaveButtonFunctionality
} from "./saveButton.js";

import {
    createDialogCloseAndOpenButtons
} from "./dialogCloseAndOpen.js";

import {
    makeInputFieldsFunctional
} from "./createInputFields.js";

/**
 * The function `dialogFunctionality` sets up functionality for a dialog box including custom color
 * values, close/open buttons, input fields, color value adjustments, and a save button.
 * @param dialog - The `dialog` parameter in the `dialogFunctionality` function represent a
 * dialog box in a user interface. This function sets up various functionalities for the
 * dialog, such as creating close and open buttons, making input fields functional, incrementing or
 * decrementing custom color values, and adding
 */
export const dialogFunctionality = (dialog) => {

    userData.customColors[dialog.id] = {
        redVal: 0,
        greenVal: 0,
        blueVal: 0,
    }

    createDialogCloseAndOpenButtons(dialog);

    makeInputFieldsFunctional(dialog);

    incrementOrDecrementCustomColorValues(dialog);

    addSaveButtonFunctionality(dialog)
}