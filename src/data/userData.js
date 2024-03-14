const userData = {
    redVal: 255,
    greenVal: 0,
    blueVal: 0,
    blurVal: 0,
    brightness: 100,
    size: "medium",
    eraser: false,
    lockedSquareColor: [255, 255, 255],
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
    },
    canvasVersions: [],
    currentIndex: 0,
    isAlert: false,
    userSettings: {
        fileName: "Untitled_Project",
        author: "Anonymous_User",
        blob: document.getElementById("setting-cursor-blob").checked,
    },

    get colorValues() {
        return `rgb(${this.redVal}, ${this.greenVal}, ${this.blueVal})`;
    },

    set colorValues(values) {
        [this.redVal, this.greenVal, this.blueVal] = values;
    },
};

export {
    userData
}