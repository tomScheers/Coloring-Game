export const setToHoverColor = (buttons) => {
    buttons.forEach((button) => {
        const colorValue = button.classList[0].split("-")[0];
        button.style.backgroundColor = colorValue;
    })
}