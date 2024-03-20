import { setResetButton } from "./addResetButton.js";

import { setCanvasVersions } from "./addGoBackButton.js";

import { incrementCanvasVersion } from "./addCanvasVersionFurther.js";

import { downloadSvgAsJpeg } from "./addSaveButton.js";

import { setSettingsButton } from "./userSettings/settingsButton.js";

export const addNavButtons = () => {
    setResetButton();
    setCanvasVersions();
    incrementCanvasVersion();
    downloadSvgAsJpeg();
    setSettingsButton();
};
