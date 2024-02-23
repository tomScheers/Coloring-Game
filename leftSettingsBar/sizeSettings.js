 import {
     userData
} from "../userData.js";
 import { context, sizeButtons } from "../variables.js"
 import { getRadius, setCircleCircumference } from "../functions.js";
 export const setSizeButtons = () => {
     sizeButtons.forEach((button) => {
         button.addEventListener("click", () => {
             const selectedSizeValue = button.value;
             userData.size = `${selectedSizeValue}`;
             if (userData.eraser) {
                 setCircleCircumference(getRadius() * 1.5)
                 context.lineWidth = getRadius(userData.size) * 10;
                 return;
             }

             setCircleCircumference(getRadius());
             context.lineWidth = getRadius(userData.size) * 2;
         });
     })
 }