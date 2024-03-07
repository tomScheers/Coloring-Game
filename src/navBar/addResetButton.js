export const setResetButton = () => {
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () => {
        location.reload();
    })
}