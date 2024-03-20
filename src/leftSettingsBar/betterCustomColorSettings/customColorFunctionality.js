import { openCloseDialog } from "./openCloseDialog.js";

import { saveCustomColor } from "./saveCustomColor.js";

export const customColorFunctionality = (dialog) => {
    openCloseDialog(dialog);
    saveCustomColor(dialog);
};
