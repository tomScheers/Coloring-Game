 import {
     userData
} from "../userData.js";
 import { context } from "../variables.js"
 const getRadius = () => {
     switch (userData.size) {
         case "super-small":
             return 0.5;
         case "small":
             return 1;
         case "medium":
             return 2;
         case "big":
             return 3;
         case "super-big":
             return 4;
     }
 };
 const setCircleCircumference = (s) => {
     circle.style.width = `${s}rem`;
     circle.style.height = `${s}rem`;
 }
 export const setSizeButtons = (buttons) => {
     buttons.forEach((button) => {
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