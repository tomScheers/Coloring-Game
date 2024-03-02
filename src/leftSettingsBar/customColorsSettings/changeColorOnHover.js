export const changeColorOnHover = (dialog) => {
    const inputWrappers = document.querySelectorAll(`#${dialog.id} .input-wrapper`);
    inputWrappers.forEach((wrapper) => {
        wrapper.addEventListener("mouseenter", () => {
            const childButtons = document.querySelectorAll(`#${dialog.id} .${wrapper.classList[0]} button`);
            childButtons.forEach((button) => {
                button.style.backgroundColor = button.classList[0].split("-")[0];
            })
        })
                wrapper.addEventListener("mouseout", () => {
                    const childButtons = document.querySelectorAll(`#${dialog.id} .${wrapper.classList[0]} button`);
                    childButtons.forEach((button) => {
                        button.style.backgroundColor = "transparent";
                    })
                })
    })
}