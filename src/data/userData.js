"use strict";
export const userData = {
    redVal: 255,
    greenVal: 0,
    blueVal: 0,
    blurVal: 0,
    brightness: 100,
    size: "medium",
    eraser: false,
    editingCustomColors: false,
    lockedSquareColor: {
        red: 255,
        green: 255,
        blue: 255,
    },
    isDrawing: false,
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
        black: [0, 0, 0],
    },
    canvasVersions: [],
    currentIndex: 0,
    isAlert: false,
    userSettings: {
        fileName: "Untitled_Project",
        author: "Anonymous_User",
        blob: document.getElementById("setting-cursor-blob").checked,

        get theUsersSettings() {
            return {
                fileName: this.fileName,
                author: this.author,
                blob: this.blob,
            };
        },

        set theUsersSettings(value) {
            [this.fileName, this.author, this.blob] = [
                value.fileName,
                value.author,
                value.blob,
            ];
        },
    },

    get currentCanvasVersion() {
        return this.canvasVersions[this.currentIndex];
    },

    set currentCanvasVersion(value) {
        this.canvasVersions = value;
    },

    get colorValues() {
        return `rgb(${this.redVal}, ${this.greenVal}, ${this.blueVal})`;
    },

    set colorValues(values) {
        [this.redVal, this.greenVal, this.blueVal] = values;
    },

    get lockedSquareColorValues() {
        return `rgb(${this.lockedSquareColor.red}, ${this.lockedSquareColor.green}, ${this.lockedSquareColor.blue})`;
    },

    set lockedSquareColorValues(value) {
        [
            this.lockedSquareColor.red,
            this.lockedSquareColor.green,
            this.lockedSquareColor.blue,
        ] = value;
    },

    get filterValues() {
        return `blur(${this.blurVal}rem) brightness(${this.brightness}%)`;
    },

    set filterValues(values) {
        [this.blurVal, this.brightness] = values;
    },

    get blurValue() {
        return `blur(${this.blurVal}rem)`;
    },

    set blurValue(value) {
        this.blurVal = value;
    },

    get brightnessValue() {
        return `brightness(${this.brightness}%)`;
    },

    set brightnessValue(value) {
        this.brightness = value;
    },

    get currentCanvas() {
        return this.canvasVersions[this.currentIndex - 1];
    },

    set currentCanvas(value) {
        this.canvasVersions = value;
    },

    get canvasIsBeingDrawn() {
        return this.isDrawing;
    },

    set canvasIsBeingDrawn(value) {
        this.isDrawing = value;
    },
};
