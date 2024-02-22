import {
    userData
} from '../userData.js';
import {
    setColorButtons
} from './colorSettings.js';
import {
    dialogList,
} from "../variables.js";
import { customColorsMap } from "../arrayMap.js"

export const dialogFunctionality = (dialog) => {
    const currentButton = document.getElementById(`custom-color${dialog.id.split("-")[1]}`);
    userData.customColors[dialog.id] = {
        redVal: 0,
        greenVal: 0,
        blueVal: 0,
    }
    const showButton = document.querySelector(`#custom-color${dialog.id.split("-")[1]}`);
    const closeButton = document.querySelector(`#${dialog.id} .close-button`);
    showButton.addEventListener("click", () => {
        if (currentButton.classList.contains("color-settings-icon")) return;
        dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });
    dialog.close();
    const previewSquare = document.querySelector(`#${dialog.id} .color-preview`);
    const customColorsInputElements = document.querySelectorAll('input[type=number]');
    const changeViaInput = (elem) => {
        let enteredValue = parseFloat(elem.value);

        if (enteredValue < parseFloat(elem.min) || elem.value.length <= 0) {
            elem.value = elem.min;
        }

        if (enteredValue > parseFloat(elem.max)) {
            elem.value = elem.max;
        }

        elem.value = parseFloat(elem.value) + 0;
        const valKey = `${elem.classList[0].split("-")[0]}Val`;
        userData.customColors[dialog.id][valKey] = elem.value;
        previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
    }


    customColorsInputElements.forEach((input) => {
        input.addEventListener('blur', changeViaInput(input));
        input.addEventListener("keydown", () => {
            if (event.keyCode === 13) {
                input.blur();
                changeViaInput(input);
            }
        })
    });

    customColorsMap.forEach((id) => {
        const currentItem = document.querySelector(`#${dialog.id} .${id}`);
        currentItem.addEventListener("click", () => {

            const propKey = `${currentItem.className.split("-")[0]}Val`;
            const inputElement = document.querySelector(`#${dialog.id} .${currentItem.parentNode.classList} input`);
            if (customColorsMap.indexOf(id) % 2 === 0) {

                if (parseFloat(inputElement.value) - 1 < inputElement.min) return;
                inputElement.value--;
                userData.customColors[dialog.id][propKey]--;
            } else {

                if (parseFloat(inputElement.value) + 1 > inputElement.max) return;
                inputElement.value++;
                userData.customColors[dialog.id][propKey]++;
            }


            previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
        })
        const saveButton = document.querySelector(`#${dialog.id} .save-button`);
        saveButton.addEventListener("click", () => {
            dialog.close();
            currentButton.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
            currentButton.innerText = "";
            currentButton.classList.add("color-settings-icon");
            userData.colorMap[currentButton.id] = [userData.customColors[dialog.id].redVal, userData.customColors[dialog.id].greenVal, userData.customColors[dialog.id].blueVal]
            const nextButton = document.getElementById(`custom-color${parseInt(dialog.id.split("-")[1]) + 1}`);
            nextButton.innerText = "+";
            dialogFunctionality(dialogList[parseInt(dialog.id.split("-")[1])]);
            setColorButtons()
            nextButton.classList.remove("hidden");
            nextButton.classList.add("color-setting-square");
            previewSquare.style.backgroundColor = "rgb(0,0,0)";
        })
    })
}