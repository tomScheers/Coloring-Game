import { userData } from "../../data/userData.js";
import { setColorButtons } from "../colorSettings.js";
import { openCloseDialog } from "./openCloseDialog.js";
import { colorBrightnessButtons } from "../../data/variables.js";
import { colorBlurButtons } from "../../data/variables.js";
import { context } from "../../data/variables.js";

import { saveCustomColor } from "./saveCustomColor.js";

export const deleteCustomColor = () => {
    const customColorButton = document.getElementById(
        "change-custom-color-values"
    );

    const customColorSection = document.getElementById("custom-colors");

    customColorButton.addEventListener("click", () => {
        const selectedButton = document.querySelector(
            ".selected-settings.color-settings-icon"
        );
        if (selectedButton.id.split("-")[0] === "custom") {
            userData.colorValues = [255, 0, 0];
            
            colorBlurButtons.forEach((b) => {
                b.style.backgroundColor = userData.colorValues;
            });

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = userData.colorValues;
            });

            const originalButton = document.getElementById("red");
            originalButton.classList.add("selected-settings");
            context.strokeStyle = userData.colorValues;
        }
        console.log("HELLO")
        customColorSection.innerHTML = `
                            <button
                                id="custom-color1"
                                class="color-setting-square custom"
                            >
                                +
                            </button>
                            <dialog
                                class="dialog-element"
                                role="dialog"
                                id="dialog-1"
                            >
                                <div class="dialog-inner-wrapper">
                                    <div class="custom-colors-settings-wrapper">
                                        <input
                                            type="color"
                                            class="custom-color-input-picker"
                                        />

                                        <div class="exit-save-buttons">
                                            <button class="close-button">
                                                Exit
                                            </button>
                                            <button class="save-button">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            <button
                                id="custom-color2"
                                class="hidden custom"
                            ></button>
                            <dialog
                                class="dialog-element"
                                role="dialog"
                                id="dialog-2"
                            >
                                <div class="dialog-inner-wrapper">
                                    <div class="custom-colors-settings-wrapper">
                                        <input
                                            type="color"
                                            class="custom-color-input-picker"
                                        />

                                        <div class="exit-save-buttons">
                                            <button class="close-button">
                                                Exit
                                            </button>
                                            <button class="save-button">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            <button
                                id="custom-color3"
                                class="hidden custom"
                            ></button>
                            <dialog
                                class="dialog-element"
                                role="dialog"
                                id="dialog-3"
                            >
                                <div class="dialog-inner-wrapper">
                                    <div class="custom-colors-settings-wrapper">
                                        <input
                                            type="color"
                                            class="custom-color-input-picker"
                                        />

                                        <div class="exit-save-buttons">
                                            <button class="close-button">
                                                Exit
                                            </button>
                                            <button class="save-button">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            <button
                                id="custom-color4"
                                class="hidden custom"
                            ></button>
                            <dialog
                                class="dialog-element"
                                role="dialog"
                                id="dialog-4"
                            >
                                <div class="dialog-inner-wrapper">
                                    <div class="custom-colors-settings-wrapper">
                                        <input
                                            type="color"
                                            class="custom-color-input-picker"
                                        />

                                        <div class="exit-save-buttons">
                                            <button class="close-button">
                                                Exit
                                            </button>
                                            <button class="save-button">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            <button
                                id="custom-color5"
                                class="hidden custom"
                            ></button>
                            <dialog
                                class="dialog-element"
                                role="dialog"
                                id="dialog-5"
                            >
                                <div class="dialog-inner-wrapper">
                                    <div class="custom-colors-settings-wrapper">
                                        <input
                                            type="color"
                                            class="custom-color-input-picker"
                                        />

                                        <div class="exit-save-buttons">
                                            <button class="close-button">
                                                Exit
                                            </button>
                                            <button class="save-button">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            <button
                                id="custom-color6"
                                class="hidden custom"
                            ></button>
                            <dialog
                                class="dialog-element"
                                role="dialog"
                                id="dialog-6"
                            >
                                <div class="dialog-inner-wrapper">
                                    <div class="custom-colors-settings-wrapper">
                                        <input
                                            type="color"
                                            class="custom-color-input-picker"
                                        />

                                        <div class="exit-save-buttons">
                                            <button class="close-button">
                                                Exit
                                            </button>
                                            <button class="save-button">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            <button
                                id="custom-color7"
                                class="hidden custom"
                            ></button>
                            <dialog
                                class="dialog-element"
                                role="dialog"
                                id="dialog-7"
                            >
                                <div class="dialog-inner-wrapper">
                                    <div class="custom-colors-settings-wrapper">
                                        <input
                                            type="color"
                                            class="custom-color-input-picker"
                                        />

                                        <div class="exit-save-buttons">
                                            <button class="close-button">
                                                Exit
                                            </button>
                                            <button class="save-button">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>`;

        const dialog = document.getElementById("dialog-1");
        openCloseDialog(dialog);
        saveCustomColor(dialog);
    });
};
