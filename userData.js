let userData = {
    redVal: 255,
    greenVal: 0,
    blueVal: 0,
    blurVal: 0,
    brightness: 100,
    size: "medium",
    eraser: false,
    lockedSquareColor: "white",
    currentColor: `rgb(255,0,0)`,
    customColors: {

    },
    colorMap: {
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
        gray: [169, 169, 169],
        darkgray: [128, 128, 128],
        dimgray: [105, 105, 105],
        black: [0, 0, 0]
    }
};

const setNewValues = (redVal, greenVal, blueVal) => {
    userData.redVal = redVal;
    userData.greenVal = greenVal;
    userData.blueVal = blueVal;
}

export {
    userData,
    setNewValues
}