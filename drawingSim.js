document.addEventListener("DOMContentLoaded", () => {
    const colorButtons = document.querySelectorAll(".color-settings-icon");
    const colorBrightnessButtons = document.querySelectorAll(".light-square");
    const colorBlurButtons = document.querySelectorAll(".blur-square");
    const sizeButtons = document.querySelectorAll(".size-option");
    const pencilOptions = document.querySelectorAll(".pencil-type")
    const canvas = document.getElementById('drawing-canvas');
    const context = canvas.getContext('2d');
    const blurMap = {
        "blur-100": 0,
        "blur-80": 0.06,
        "blur-60": 0.12,
        "blur-40": 0.18,
        "blur-20": 0.24,
        "blur-0": 0.30,
    }
    let userData = {
        redVal: 255,
        greenVal: 0,
        blueVal: 0,
        blurVal: 0,
        brightness: 100,
        size: "medium",
        eraser: false,
    };
    colorBlurButtons.forEach((b) => {
        b.style.filter = `blur(${blurMap[b.id]}rem)`;
        b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
    })
    colorBrightnessButtons.forEach((b) => {
        b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
    })
    pencilOptions.forEach((button) => {
        button.addEventListener("click", () => {
            if ((button.id === "eraser") === (userData.eraser)) return;
            userData.eraser = button.id === "eraser";
            if (userData.eraser) {
                circle.style.width = `${getRadius() * 1.5}rem`;
                circle.style.height = `${getRadius() * 1.5}rem`;
                context.lineWidth = getRadius(userData.size) * 10;
                context.filter = `blur(${userData.blurVal}rem)`;
                context.strokeStyle = "white";
                circle.style.background = "white";
                colorButtons.forEach((b) => {
                    b.style.backgroundColor = "white";
                    b.classList.remove("selected-settings")
                })
                colorBlurButtons.forEach((b) => {
                    b.style.backgroundColor = "white";
                })
                colorBrightnessButtons.forEach((b) => {
                    b.style.backgroundColor = "white";
                    b.classList.remove("selected-settings");
                    b.classList.add("eraser-light")
                })
                return;
            }
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
            colorBrightnessButtons[0].classList.add("selected-settings");
            button.classList.add("selected-settings");
            userData.redVal = 255;
            userData.greenVal = 0;
            userData.blueVal = 0;
            circle.style.background = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
            context.strokeStyle = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
            circle.style.width = `${getRadius() / 2}rem`;
            circle.style.height = `${getRadius() / 2}rem`;
            context.lineWidth = getRadius(userData.size) * 2;
            context.filter = `blur(${userData.blurVal}rem)`;
            console.log(context)
            colorBlurButtons.forEach((b) => {
                b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
            })
            colorBrightnessButtons.forEach((b) => {
                b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
                b.classList.remove("eraser-light");
            })
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
    circle.style.background = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
    document.body.appendChild(circle);
    colorBlurButtons.forEach((button) => {
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
            circle.style.background = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
            context.strokeStyle = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
            colorBlurButtons.forEach((b) => {
                b.style.filter = `blur(${blurMap[b.id]}rem)`;
                b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
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
                "light-20": 20,
                "light-0": 0,
            }
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
    context.strokeStyle = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
    context.filter = `brightness(100}%) blur(0rem)`;
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