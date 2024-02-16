document.addEventListener("DOMContentLoaded", () => {
    const colorButtons = document.querySelectorAll(".color-settings-icon");
    const colorBrightnessButtons = document.querySelectorAll(".light-square");
    const coloralphaButtons = document.querySelectorAll(".alpha-square");
    const sizeButtons = document.querySelectorAll(".size-option");
    const pencilOptions = document.querySelectorAll(".pencil-type")
    const canvas = document.getElementById('drawing-canvas');
    const context = canvas.getContext('2d');
    const alphaMap = {
        "alpha-100": 1,
        "alpha-80": 0.8,
        "alpha-60": 0.6,
        "alpha-40": 0.4,
        "alpha-20": 0.2,
        "alpha-0": 0,
    }
    let userData = {
        redVal: 255,
        greenVal: 0,
        blueVal: 0,
        alphaVal: 1,
        brightness: 100,
        size: "medium",
        eraser: false,
    };
    coloralphaButtons.forEach((b) => {
        b.style.backgroundColor = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${alphaMap[b.id]})`;
    })
    colorBrightnessButtons.forEach((b) => {
        b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
    })
    pencilOptions.forEach((button) => {
        button.addEventListener("click", () => {
            userData.eraser = button.id === "eraser";
            if (userData.eraser) {
                circle.style.width = `${getRadius() * 1.5}rem`;
                circle.style.height = `${getRadius() * 1.5}rem`;
                context.lineWidth = getRadius(userData.size) * 10;
                context.strokeStyle = "white";
                circle.style.background = "white";
                colorButtons.forEach((b) => {
                    b.style.backgroundColor = "white";
                    b.classList.remove("selected-settings")
                })
                coloralphaButtons.forEach((b) => {
                    b.style.backgroundColor = "white";
                    b.classList.remove("selected-settings");
                })
                colorBrightnessButtons.forEach((b) => {
                    b.style.backgroundColor = "white";
                    b.classList.remove("selected-settings");
                    b.classList.add("eraser-light")
                })
            } else {
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
                }
                colorButtons.forEach((b) => {
                    b.classList.remove("selected-settings");
                    const color = colorMap[b.id]
                    b.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                })
                colorButtons[0].classList.add("selected-settings");
                button.classList.add("selected-settings");
                userData.redVal = 255;
                userData.greenVal = 0;
                userData.blueVal = 0;
                circle.style.background = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
                context.strokeStyle = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
                circle.style.width = `${getRadius()}rem`;
                circle.style.height = `${getRadius()}rem`;
                context.lineWidth = getRadius(userData.size) * 2;
                coloralphaButtons.forEach((b) => {
                    b.style.backgroundColor = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${alphaMap[b.id]})`;
                })
                colorBrightnessButtons.forEach((b) => {
                    b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
                    b.classList.remove("eraser-light");
                })
            }
        })
    })
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
    }
    const circle = document.createElement("div");
    circle.id = "circle";
    circle.style.width = `${getRadius()}rem`
    circle.style.height = `${getRadius()}rem`;
    circle.style.background = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
    document.body.appendChild(circle);
    coloralphaButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (userData.eraser) return;
            const newAlpha = alphaMap[button.id];
            userData.alphaVal = newAlpha;
            context.strokeStyle = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
            circle.style.background = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
            coloralphaButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })
            button.classList.add("selected-settings");
        })
    })
    colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (userData.eraser) return;
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
            }
            const newColor = [...colorMap[button.id]];
            colorButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })
            button.classList.add("selected-settings");
            userData.redVal = newColor[0];
            userData.greenVal = newColor[1];
            userData.blueVal = newColor[2];
            circle.style.background = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
            context.strokeStyle = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
            coloralphaButtons.forEach((b) => {
                b.style.backgroundColor = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${alphaMap[b.id]})`;
            })
            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
            })
        })
    })
    colorBrightnessButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (userData.eraser) return;
            const brightnessMap = {
                "light-100": 100,
                "light-80": 80,
                "light-60": 60,
                "light-40": 40,
                "light-29": 20,
                "light-0": 0,
            }
            const newBrightness = brightnessMap[button.id];
            userData.brightness = newBrightness;
            circle.style.filter = `brightness(${userData.brightness}%) blur(0.2rem)`;
            context.filter = `brightness(${userData.brightness}%)`;
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
                circle.style.width = `${getRadius() * 1.5}rem`;
                circle.style.height = `${getRadius() * 1.5}rem`;
                context.lineWidth = getRadius(userData.size) * 10;
                return;
            }
            circle.style.width = `${getRadius()}rem`;
            circle.style.height = `${getRadius()}rem`;
            context.lineWidth = getRadius(userData.size) * 2;
        });
    });
    const getMousePos = (event) => {
        return {
            x: event.clientX,
            y: event.clientY
        };
    };

    document.addEventListener("mousemove", (event) => {
        const mousePos = getMousePos(event);
        circle.style.left = `calc(${mousePos.x}px - ${circle.style.width} / 2)`;
        circle.style.top = `calc(${mousePos.y}px - ${circle.style.height} / 2)`;
    });
    canvas.width = window.innerHeight / 2 * 3;
    canvas.height = canvas.width / 4 * 6;
    context.lineWidth = getRadius(userData.size) * 2;
    context.strokeStyle = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
    context.filter = `brightness(${userData.brightness}%)`;
    let isDrawing = false;
    let startPoint = {
        x: 0,
        y: 0
    };

    const startDrawing = (event) => {
        isDrawing = true;
        startPoint = {
            x: event.clientX - canvas.getBoundingClientRect().left,
            y: event.clientY - canvas.getBoundingClientRect().top
        };
        context.beginPath();
        context.moveTo(startPoint.x, startPoint.y);
    }

    const draw = (event) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
        context.stroke();
    }

    const stopDrawing = () => {
        isDrawing = false;
    }
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

});