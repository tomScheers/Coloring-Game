 import {
     userData
 } from "../data/userData.js";

 import {
     context,
     sizeButtons
 } from "../data/variables.js";

 import {
     getRadius,
     setCircleCircumference
 } from "../data/functions.js";

 /**
  * The function `setSizeButtons` sets event listeners on size radio buttons to update the selected size value
  * in the userData object and adjust the circle circumference and line width accordingly.
  */

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