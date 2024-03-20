import { setToLocked } from "./buttonToLocked.js";

import { colorBlurButtons } from "../../../data/variables.js";

export const lockColorBlurButtons = () => {
    colorBlurButtons.forEach((b) => {
        setToLocked(b);
    });
};
