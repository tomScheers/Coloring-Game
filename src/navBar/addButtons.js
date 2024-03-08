import { setResetButton } from "./addResetButton.js";
import { setCanvasVersions } from "./addGoBackButton.js";
import {setCanvasVersionFurther} from "./addCanvasVersionFurther.js";
import { downloadSvgAsJpeg } from "./addSaveButton.js";
import { setSettingsButton } from "./settingsButton.js";
export const addNavButtons = () => {
    setResetButton();
    setCanvasVersions();
    setCanvasVersionFurther();
    downloadSvgAsJpeg();
    setSettingsButton();
}