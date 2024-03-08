import {
    setToNormal
} from "./changeToNormal.js";

import {
    setToHoverColor
} from "./changeToHoverColor.js";

export const changeColorOnHover = (dialog) => {
    const inputWrappers = dialog.querySelectorAll(`.input-wrapper`);

    inputWrappers.forEach((wrapper) => {
        let isFocused = false;
        const childButtons = dialog.querySelectorAll(`.${wrapper.classList[0]} button`);
        const childInput = dialog.querySelector(`.${wrapper.classList[0]} input`);


        childButtons.forEach((button) => {
            button.addEventListener("mouseenter", setToHoverColor.bind(null, childButtons));

            button.addEventListener("mouseout", () => {
                if (isFocused) return;
                setToNormal(childButtons);
            })
        })

        childInput.addEventListener("mouseenter", setToHoverColor.bind(null, childButtons));

        childInput.addEventListener("mouseout", () => {
            if (isFocused) return;
            setToNormal(childButtons)
        });

        childInput.addEventListener("focus", () => {
            setToHoverColor(childButtons);
            isFocused = true;
        })

        childInput.addEventListener("blur", () => {
            setToNormal(childButtons);
            isFocused = false;
        })
    })
}