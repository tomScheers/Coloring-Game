import {
    userData
} from "../../data/userData.js";

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

import { changeColorOnHover } from "./changeColorOnHover/changeColorOnHover.js";

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
    changeColorOnHover(dialog);
}