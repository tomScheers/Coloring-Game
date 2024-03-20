import {
    userData
} from "../../../data/userData.js";

export const setToLocked = (element) => {
    console.log(userData.lockedSquareColor)
    element.style.backgroundColor = userData.lockedSquareColorValues;
}