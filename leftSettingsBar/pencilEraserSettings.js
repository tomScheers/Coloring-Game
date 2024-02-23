import { pencilOptions, context, colorButtons, colorBlurButtons, colorBrightnessButtons } from "../variables.js";
import { userData } from "../userData.js";
import { getRadius, setCircleCircumference, updateCurrentColor } from "../functions.js";
export const setPencilOptions = () => {
    pencilOptions.forEach((button) => {
    button.addEventListener("click", () => {
        if ((button.id === "eraser") === (userData.eraser)) return;

        userData.eraser = button.id === "eraser";
        if (userData.eraser) {
            setCircleCircumference(getRadius() * 1.5);
            context.lineWidth = getRadius(userData.size) * 10;
            context.filter = `blur(${userData.blurVal}rem)`;
            context.strokeStyle = userData.lockedSquareColor;
            circle.style.background = userData.lockedSquareColor;

            colorButtons.forEach((b) => {
                b.style.backgroundColor = userData.lockedSquareColor;
                b.classList.remove("selected-settings")
            })

            colorBlurButtons.forEach((b) => {
                b.style.backgroundColor = userData.lockedSquareColor;
            })

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = userData.lockedSquareColor;
                b.classList.remove("selected-settings");
                b.classList.add("eraser-light")
            })

            return;
        }


        colorButtons.forEach((b) => {
            b.classList.remove("selected-settings");
            const color = userData.colorMap[b.id];
            b.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        })

        colorButtons[0].classList.add("selected-settings");
        colorBrightnessButtons[0].classList.add("selected-settings");
        button.classList.add("selected-settings");

        userData.redVal = 255;
        userData.greenVal = 0;
        userData.blueVal = 0;
        updateCurrentColor();
        circle.style.background = userData.currentColor;
        context.strokeStyle = userData.currentColor;

        setCircleCircumference(getRadius() * 1.5);
        context.lineWidth = getRadius(userData.size) * 2;
        context.filter = `blur(${userData.blurVal}rem)`;

        colorBlurButtons.forEach((b) => {
            b.style.backgroundColor = userData.currentColor;
        })

        colorBrightnessButtons.forEach((b) => {
            b.style.backgroundColor = userData.currentColor;
            b.classList.remove("eraser-light");
        })
    })
})
}
