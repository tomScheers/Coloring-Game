const blurMap = {
    "blur-100": 0,
    "blur-80": 0.06,
    "blur-60": 0.12,
    "blur-40": 0.18,
    "blur-20": 0.24,
    "blur-0": 0.30,
};

let userData = {
    redVal: 255,
    greenVal: 0,
    blueVal: 0,
    blurVal: 0,
    brightness: 100,
    size: "medium",
    eraser: false,
    lockedSquareColor: "white",
    customColors: {
        
    }
};

const colorMap = {
    red: [255, 0, 0],
    orange: [255, 165, 0],
    yellow: [255, 255, 0],
    green: [0, 128, 0],
    blue: [0, 0, 255],
    indigo: [75, 0, 130],
    violet: [238, 130, 238],
    white: [255, 255, 255],
    lightgray: [211, 211, 211],
    silver: [192, 192, 192],
    gray: [128, 128, 128],
    darkgray: [169, 169, 169],
    dimgray: [105, 105, 105],
    black: [0, 0, 0]
};

const brightnessMap = {
    "light-100": 100,
    "light-80": 80,
    "light-60": 60,
    "light-40": 40,
    "light-20": 20,
    "light-0": 0,
};

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

const customColorsMap = ["red-value-decrement", "red-value-increment", "green-value-decrement", "green-value-increment", "blue-value-decrement", "blue-value-increment", "brightness-value-decrement", "brightness-value-increment", "blur-value-decrement", "blur-value-increment"];

const getMousePos = (event) => {
    return {
        x: event.clientX,
        y: event.clientY
    };
};

let isDrawing = false;
let rect;
let ctx;
let startPoint = {
    x: 0,
    y: 0
};

const startDrawing = (event) => {
    isDrawing = true;

    startPoint = {
        x: event.clientX - rect.getBoundingClientRect().left,
        y: event.clientY - rect.getBoundingClientRect().top
    };

    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
}

const draw = (event) => {
    if (!isDrawing) return;

    ctx.lineTo(event.clientX - rect.getBoundingClientRect().left, event.clientY - rect.getBoundingClientRect().top);
    ctx.stroke();
}

const stopDrawing = () => {
    isDrawing = false;
}

let currentColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;

const updateCurrentColor = () => {
    currentColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
}


document.addEventListener("DOMContentLoaded", () => {


    const colorButtons = document.querySelectorAll(".color-settings-icon");
    const colorBrightnessButtons = document.querySelectorAll(".light-square");
    const colorBlurButtons = document.querySelectorAll(".blur-square");
    const sizeButtons = document.querySelectorAll(".size-option");
    const pencilOptions = document.querySelectorAll(".pencil-type")
    const canvas = document.getElementById('drawing-canvas');
    const context = canvas.getContext('2d');
    const circle = document.createElement("div");
    circle.id = "circle";
    circle.style.background = currentColor;

    const setCircleCircumference = (s) => {
        circle.style.width = `${s}rem`;
        circle.style.height = `${s}rem`;
    }

    setCircleCircumference(getRadius());
    document.body.appendChild(circle);

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
                const color = colorMap[b.id];
                b.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            })

            colorButtons[0].classList.add("selected-settings");
            colorBrightnessButtons[0].classList.add("selected-settings");
            button.classList.add("selected-settings");

            userData.redVal = 255;
            userData.greenVal = 0;
            userData.blueVal = 0;
            updateCurrentColor();
            circle.style.background = currentColor;
            context.strokeStyle = currentColor;

            setCircleCircumference(getRadius() * 1.5);
            context.lineWidth = getRadius(userData.size) * 2;
            context.filter = `blur(${userData.blurVal}rem)`;

            colorBlurButtons.forEach((b) => {
                b.style.backgroundColor = currentColor;
            })

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = currentColor;
                b.classList.remove("eraser-light");
            })
        })
    })


    colorBlurButtons.forEach((button) => {
        button.style.filter = `blur(${blurMap[button.id]}rem)`;
        button.style.backgroundColor = currentColor;

        button.addEventListener("click", () => {
            const newBlur = blurMap[button.id];
            userData.blurVal = newBlur;
            context.filter = `blur(${newBlur}rem)`;

            colorBlurButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })


    colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (userData.eraser) return;

            const newColor = colorMap[button.id];

            colorButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
            userData.redVal = newColor[0];
            userData.greenVal = newColor[1];
            userData.blueVal = newColor[2];
            updateCurrentColor();
            circle.style.background = currentColor;
            context.strokeStyle = currentColor;

            colorBlurButtons.forEach((b) => {
                b.style.filter = `blur(${blurMap[b.id]}rem)`;
                b.style.backgroundColor = currentColor;
            })

            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = currentColor;
            })
        })
    })


    colorBrightnessButtons.forEach((button) => {
        button.style.backgroundColor = currentColor;

        button.addEventListener("click", () => {
            if (userData.eraser) return;

            const newBrightness = brightnessMap[button.id];
            userData.brightness = newBrightness;
            circle.style.filter = `brightness(${userData.brightness}%) blur(0.2rem)`;
            context.filter = `brightness(${userData.brightness}%) blur(${userData.blurVal}rem)`;

            colorBrightnessButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })

            button.classList.add("selected-settings");
        })
    })


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
    });

    document.addEventListener("mousemove", (event) => {
        const mousePos = getMousePos(event);
        circle.style.left = `calc(${mousePos.x}px - ${circle.style.width} / 2)`;
        circle.style.top = `calc(${mousePos.y}px - ${circle.style.height} / 2)`;
    });


    rect = canvas;
    ctx = context;
    canvas.width = window.innerWidth / 2 * 3;
    canvas.height = canvas.width / 4 * 6;
    context.lineWidth = getRadius(userData.size) * 2;
    context.strokeStyle = currentColor;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);


    const dialogList = document.querySelectorAll("dialog");
    dialogList.forEach((dialog) => {
        userData.customColors[dialog.id] =  {
            redVal: 0,
            greenVal: 0,
            blueVal: 0,
            blurVal: 0,
            brightness: 100,
        }
        const showButton = document.querySelector(`#custom-color${dialog.id.split("-")[1]}`); 
        const closeButton = document.querySelector("#dialog-1 .close-button");
        showButton.addEventListener("click", () => {
            dialog.showModal();
        });

        closeButton.addEventListener("click", () => {
            dialog.close();
        });
        dialog.close();
        const previewSquare = document.querySelector(`#${dialog.id} .color-preview`)
        const customColorsInputElements = document.querySelectorAll('input[type=number]');
        const changeViaInput = (elem) => {
            let enteredValue = parseFloat(elem.value);
    
            if (enteredValue < parseFloat(elem.min)) {
                elem.value = elem.min;
            }
    
            if (enteredValue > parseFloat(elem.max)) {
                elem.value = elem.max;
            }
    
            elem.value = parseFloat(elem.value) + 0;
            const valKey = `${elem.classList[0].split("-")[0]}Val`;
            const currentUserValue = userData.customColors[dialog.id][valKey];
            userData.customColors[dialog.id][valKey] = elem.value;
            previewSquare.style.backgroundColor = `rgb(${currentUserValue.redVal}, ${currentUserValue.greenVal}, ${currentUserValue.blueVal})`;
            previewSquare.style.filter = `blur(${parseFloat(currentUserValue.blurVal) / 100}rem) brightness(${currentUserValue.brightnessVal}%)`;
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
                    userData.customColors[`custom-color${dialog.id.split("-")[1]}`][propKey]--;
                    console.log(userData.customColors[`custom-color${dialog.id.split("-")[1]}`])
                } else {

                    if (parseFloat(inputElement.value) + 1 > inputElement.max) return;
                    inputElement.value++;
                    console.log(userData.customColors[`custom-color${dialog.id.split("-")[1]}`])
                    userData.customColors[`custom-color${dialog.id.split("-")[1]}`][propKey]++;
                }


                previewSquare.style.backgroundColor = `rgb(${userData.customColors[`custom-color${dialog.id.split("-")[1]}`].redVal}, ${userData.customColors[`custom-color${dialog.id.split("-")[1]}`].greenVal}, ${userData.customColors[`custom-color${dialog.id.split("-")[1]}`].blueVal})`;
                previewSquare.style.filter = `blur(${parseFloat(userData.customColors[`custom-color${dialog.id.split("-")[1]}`].blurVal) / 100}rem) brightness(${userData.customColors[`custom-color${dialog.id.split("-")[1]}`].brightnessVal}%)`;
            })
        })
    })
    

});