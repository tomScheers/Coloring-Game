import {
    setToNormal
} from "./changeToNormal.js";

import {
    setToHoverColor
} from "./changeToHoverColor.js";

export const changeColorOnHover = (dialog) => {
    const inputWrappers = document.querySelectorAll(`#${dialog.id} .input-wrapper`);

    inputWrappers.forEach((wrapper) => {
        let isFocused = false;
        const childButtons = document.querySelectorAll(`#${dialog.id} .${wrapper.classList[0]} button`);
        const childInput = document.querySelector(`#${dialog.id} .${wrapper.classList[0]} input`);


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