document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll(".color-settings-icon");
    const colorBrightnessButtons = document.querySelectorAll(".light-square");
    const colorOpacityButtons = document.querySelectorAll(".opacity-square");
    const sizeButtons = document.querySelectorAll(".size-option");
    const sizeForm = document.getElementById("size-choices");
    const leftBar = document.getElementById("settings-left");
    const topBar = document.getElementById("settings-top");
    const opacityMap = {
        "opacity-100": 1,
        "opacity-80": 0.8,
        "opacity-60": 0.6,
        "opacity-40": 0.4,
        "opacity-20": 0.2,
        "opacity-0": 0,
    }
    let userData = {
        redVal: 255,
        greenVal: 0,
        blueVal: 0,
        alphaVal: 1,
        brightness: 100,
        opacity: 1,
        size: "medium",
        eraser: false,
    };
    colorOpacityButtons.forEach((b) => {
        b.style.backgroundColor = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${opacityMap[b.id]})`;
    })
    colorBrightnessButtons.forEach((b) => {
        b.style.backgroundColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
    })
    const circle = document.createElement("div");
    const getRadius = () => {
        switch (userData.size) {
            case "super-small":
                return "0.5rem"
            case "small":
                return "1rem"
            case "medium":
                return "2rem"
            case "big":
                return "3rem"
            case "super-big":
                return "4rem"
        }
    }
    colorOpacityButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const newOpacity = opacityMap[button.id];
            userData.opacity = newOpacity;
            circle.style.opacity = userData.opacity;
            colorOpacityButtons.forEach((b) => {
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
            colorOpacityButtons.forEach((b) => {
                b.style.backgroundColor = `rgba(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal}, ${opacityMap[b.id]})`;
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
            circle.style.width = getRadius();
            circle.style.height = getRadius();
        });
    });
    const getMousePos = (event) => {
        return {
            x: event.clientX,
            y: event.clientY
        };
    };

    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";
    circle.style.zIndex = "1";
    circle.style.filter = "blur(0.2rem)";
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

    const canvas = document.getElementById('drawing-canvas');
    const context = canvas.getContext('2d');

    // Set initial drawing settings
    context.lineWidth = 2;
    context.strokeStyle = '#000';

    let isDrawing = false;
    function startDrawing(event) {
        isDrawing = true;
        context.beginPath();
        context.moveTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
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
    // Event listeners for drawing
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);


    




});