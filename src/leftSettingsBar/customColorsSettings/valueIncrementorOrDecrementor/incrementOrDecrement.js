import {
    userData
} from "../../../data/userData.js";

export const incrementOrDecrementColorValue = (currentItem, dialog) => {
    const propKey = `${currentItem.className.split("-")[0]}Val`;
    const inputElement = dialog.querySelector(`.${currentItem.parentNode.classList[0]} input`);
    const isIncrement = currentItem.classList[0].split("-").includes("increment");

    if (isIncrement) {
        const newValIsOverMax = parseFloat(inputElement.value) + 1 > inputElement.max;
        if (newValIsOverMax) return;
        inputElement.value++;
        userData.customColors[dialog.id][propKey]++;
        return;
    }

    const newValIsUnderMin = parseFloat(inputElement.value) - 1 < inputElement.min;
    if (newValIsUnderMin) return;
    inputElement.value--;
    userData.customColors[dialog.id][propKey]--;

}