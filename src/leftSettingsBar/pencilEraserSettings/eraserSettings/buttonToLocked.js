import { userData } from "../../../data/userData.js";

export const setToLocked = (element) => {
    element.style.backgroundColor = userData.lockedSquareColorValues;
};
