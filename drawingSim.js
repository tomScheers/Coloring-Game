document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll(".color-settings-icon");
    const colorBrightnessButtons = document.querySelectorAll(".light-square");
    const coloralphaButtons = document.querySelectorAll(".alpha-square");
    const sizeButtons = document.querySelectorAll(".size-option");
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
    const circle = document.createElement("div");
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
    coloralphaButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const newAlpha = alphaMap[button.id];
            userData.alphaVal = newAlpha;
            context.strokeStyle = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${newAlpha})`;
            coloralphaButtons.forEach((b) => {
                b.classList.remove("selected-settings");
            })
            button.classList.add("selected-settings");
        })
    })
    colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
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

    circle.style.width = getRadius();
    circle.style.height = getRadius();
    circle.style.background = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${userData.alphaVal})`;
    circle.style.pointerEvents = "none";
    document.body.appendChild(circle);

    document.addEventListener("mousemove", function (event) {
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

    function startDrawing(event) {
        isDrawing = true;
        startPoint = {
            x: event.clientX - canvas.getBoundingClientRect().left,
            y: event.clientY - canvas.getBoundingClientRect().top
        };
        context.beginPath();
        context.moveTo(startPoint.x, startPoint.y);
    }

    function draw(event) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
        context.stroke();
    }

    function stopDrawing() {
        isDrawing = false;
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
});