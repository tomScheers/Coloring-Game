(() => {
  // data/userData.js
  var userData = {
    redVal: 255,
    greenVal: 0,
    blueVal: 0,
    blurVal: 0,
    brightness: 100,
    size: "medium",
    eraser: false,
    lockedSquareColor: "white",
    currentColor: `rgb(255,0,0)`,
    customColors: {},
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
  var setNewValues = (redVal, greenVal, blueVal) => {
    userData.redVal = redVal;
    userData.greenVal = greenVal;
    userData.blueVal = blueVal;
  };

  // data/variables.js
  var dialogList = document.querySelectorAll("dialog");
  var colorButtons = document.querySelectorAll(".color-settings-icon");
  var colorBrightnessButtons = document.querySelectorAll(".light-square");
  var colorBlurButtons = document.querySelectorAll(".blur-square");
  var sizeButtons = document.querySelectorAll(".size-option");
  var customColorButtons = document.querySelectorAll(".custom");
  var pencilOptions = document.querySelectorAll(".pencil-type");
  var canvas = document.getElementById("drawing-canvas");
  var context = canvas.getContext("2d");
  var circle = document.getElementById("circle");
  circle.style.width = "2rem";
  circle.style.height = "2rem";
  circle.style.backgroundColor = userData.currentColor;

  // data/functions.js
  var updateCurrentColor = () => {
    userData.currentColor = `rgb(${userData.redVal}, ${userData.greenVal}, ${userData.blueVal})`;
  };
  var getRadius = () => {
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
  var getMousePos = (event2) => {
    return {
      x: event2.clientX,
      y: event2.clientY
    };
  };
  var setCircleCircumference = (s) => {
    circle.style.width = `${s}rem`;
    circle.style.height = `${s}}rem`;
  };

  // leftSettingsBar/colorSettings.js
  var setColorButtons = (buttons) => {
    buttons.forEach((button) => {
      button.ariaLabel = `${button.id.split("-")[0]}-button`;
      button.addEventListener("click", () => {
        if (userData.eraser)
          return;
        const newColor = userData.colorMap[button.id];
        const buttonsToDeselect = document.querySelectorAll(`.color-settings-icon`);
        buttonsToDeselect.forEach((b) => {
          b.classList.remove("selected-settings");
        });
        button.classList.add("selected-settings");
        setNewValues(newColor[0], newColor[1], newColor[2]);
        updateCurrentColor();
        circle.style.backgroundColor = userData.currentColor;
        context.strokeStyle = userData.currentColor;
        colorBlurButtons.forEach((b) => {
          const buttonBlurValue = 0.075 * (parseFloat(b.id.split("-")[1]) / 50);
          b.style.filter = `blur(${buttonBlurValue}rem)`;
          b.style.backgroundColor = userData.currentColor;
        });
        colorBrightnessButtons.forEach((b) => {
          b.style.backgroundColor = userData.currentColor;
        });
      });
    });
  };

  // leftSettingsBar/customColorsSettings/valueIncrementorOrDecrementor/incrementOrDecrement.js
  var incrementOrDecrement = (currentItem, dialog) => {
    const propKey = `${currentItem.className.split("-")[0]}Val`;
    const inputElement = document.querySelector(`#${dialog.id} .${currentItem.parentNode.classList[0]} input`);
    const isIncrement = currentItem.classList[0].split("-").includes("increment");
    if (isIncrement) {
      if (parseFloat(inputElement.value) + 1 > inputElement.max)
        return;
      inputElement.value++;
      userData.customColors[dialog.id][propKey]++;
    } else {
      if (parseFloat(inputElement.value) - 1 < inputElement.min)
        return;
      inputElement.value--;
      userData.customColors[dialog.id][propKey]--;
    }
  };

  // leftSettingsBar/customColorsSettings/valueIncrementorOrDecrementor/valueIncrementorOrDecrementer.js
  var incrementOrDecrementCustomColorValues = (dialog) => {
    const customColorsMap = ["red-value-decrement", "red-value-increment", "green-value-decrement", "green-value-increment", "blue-value-decrement", "blue-value-increment"];
    const previewSquare = document.querySelector(`#${dialog.id} .color-preview`);
    customColorsMap.forEach((id) => {
      const currentItem = document.querySelector(`#${dialog.id} .${id}`);
      currentItem.addEventListener("click", () => {
        incrementOrDecrement(currentItem, dialog);
        previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
      });
    });
  };

  // leftSettingsBar/customColorsSettings/saveButton.js
  var addSaveButtonFunctionality = (dialog) => {
    const currentButton = document.getElementById(`custom-color${dialog.id.split("-")[1]}`);
    const previewSquare = document.querySelector(`#${dialog.id} .color-preview`);
    const saveButton = document.querySelector(`#${dialog.id} .save-button`);
    saveButton.addEventListener("click", () => {
      dialog.close();
      currentButton.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
      currentButton.innerText = "";
      currentButton.classList.add("color-settings-icon");
      userData.colorMap[currentButton.id] = [userData.customColors[dialog.id].redVal, userData.customColors[dialog.id].greenVal, userData.customColors[dialog.id].blueVal];
      const nextButton = document.getElementById(`custom-color${parseInt(dialog.id.split("-")[1]) + 1}`);
      if (nextButton === null)
        return;
      nextButton.innerText = "+";
      dialogFunctionality(dialogList[parseInt(dialog.id.split("-")[1])]);
      setColorButtons([currentButton]);
      nextButton.classList.remove("hidden");
      nextButton.classList.add("color-setting-square");
      previewSquare.style.backgroundColor = "rgb(0,0,0)";
    });
  };

  // leftSettingsBar/customColorsSettings/dialogCloseAndOpen.js
  var createDialogCloseAndOpenButtons = (dialog) => {
    const currentButton = document.getElementById(`custom-color${dialog.id.split("-")[1]}`);
    const showButton = document.querySelector(`#custom-color${dialog.id.split("-")[1]}`);
    const closeButton = document.querySelector(`#${dialog.id} .close-button`);
    showButton.addEventListener("click", () => {
      if (currentButton.classList.contains("color-settings-icon") || userData.eraser)
        return;
      dialog.showModal();
    });
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  };

  // leftSettingsBar/customColorsSettings/changeViaInput.js
  var changeViaInput = (elem, dialog) => {
    const previewSquare = document.querySelector(`#${dialog.id} .color-preview`);
    const enteredValue = parseFloat(elem.value);
    if (enteredValue < parseFloat(elem.min) || elem.value.length <= 0) {
      elem.value = elem.min;
    }
    if (enteredValue > parseFloat(elem.max)) {
      elem.value = elem.max;
    }
    elem.value = parseFloat(elem.value) + 0;
    const valKey = `${elem.classList[0].split("-")[0]}Val`;
    userData.customColors[dialog.id][valKey] = elem.value;
    previewSquare.style.backgroundColor = `rgb(${userData.customColors[dialog.id].redVal}, ${userData.customColors[dialog.id].greenVal}, ${userData.customColors[dialog.id].blueVal})`;
  };

  // leftSettingsBar/customColorsSettings/createInputFields.js
  var makeInputFieldsFunctional = (dialog) => {
    const customColorsInputElements = document.querySelectorAll("input[type=number]");
    customColorsInputElements.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.value === "")
          return;
        input.value = parseFloat(input.value);
      });
      input.addEventListener("blur", () => {
        input.blur();
        changeViaInput(input, dialog);
      });
      input.addEventListener("keydown", () => {
        if (event.keyCode === 13) {
          input.blur();
          changeViaInput(input, dialog);
        }
      });
    });
  };

  // leftSettingsBar/customColorsSettings/customColorSettings.js
  var dialogFunctionality = (dialog) => {
    userData.customColors[dialog.id] = {
      redVal: 0,
      greenVal: 0,
      blueVal: 0
    };
    createDialogCloseAndOpenButtons(dialog);
    makeInputFieldsFunctional(dialog);
    incrementOrDecrementCustomColorValues(dialog);
    addSaveButtonFunctionality(dialog);
  };

  // leftSettingsBar/sizeSettings.js
  var setSizeButtons = () => {
    sizeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedSizeValue = button.value;
        userData.size = `${selectedSizeValue}`;
        if (userData.eraser) {
          setCircleCircumference(getRadius() * 1.5);
          context.lineWidth = getRadius(userData.size) * 10;
          return;
        }
        setCircleCircumference(getRadius());
        context.lineWidth = getRadius(userData.size) * 2;
      });
    });
  };

  // leftSettingsBar/pencilEraserSettings/setToPencil.js
  var setToPencil = (button) => {
    colorButtons.forEach((b) => {
      b.classList.remove("selected-settings");
      const color = userData.colorMap[b.id];
      b.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    });
    colorButtons[0].classList.add("selected-settings");
    colorBrightnessButtons[0].classList.add("selected-settings");
    button.classList.add("selected-settings");
    setNewValues(255, 0, 0);
    updateCurrentColor();
    setCircleCircumference(getRadius());
    circle.style.backgroundColor = userData.currentColor;
    context.strokeStyle = userData.currentColor;
    context.lineWidth = getRadius(userData.size) * 2;
    context.filter = `blur(${userData.blurVal}rem)`;
    colorBlurButtons.forEach((b) => {
      b.style.backgroundColor = userData.currentColor;
    });
    colorBrightnessButtons.forEach((b) => {
      b.style.backgroundColor = userData.currentColor;
      b.classList.remove("eraser-light");
    });
  };

  // leftSettingsBar/pencilEraserSettings/setToEraser.js
  var setToEraser = () => {
    setCircleCircumference(getRadius() * 1.5);
    context.lineWidth = getRadius(userData.size) * 10;
    context.filter = `blur(${userData.blurVal}rem)`;
    context.strokeStyle = userData.lockedSquareColor;
    circle.style.backgroundColor = userData.lockedSquareColor;
    colorButtons.forEach((b) => {
      b.style.backgroundColor = userData.lockedSquareColor;
      b.classList.remove("selected-settings");
    });
    colorBlurButtons.forEach((b) => {
      b.style.backgroundColor = userData.lockedSquareColor;
    });
    colorBrightnessButtons.forEach((b) => {
      b.style.backgroundColor = userData.lockedSquareColor;
      b.classList.remove("selected-settings");
      b.classList.add("eraser-light");
    });
    customColorButtons.forEach((button) => {
      if (button.classList.contains("color-setting-square") && !button.classList.contains("color-settings-icon")) {
        button.innerText = "X";
        return;
      }
      if (!button.classList.contains("color-settings-icon"))
        return;
      button.style.backgroundColor = userData.lockedSquareColor;
    });
  };

  // leftSettingsBar/pencilEraserSettings/pencilEraserSettings.js
  var setPencilOptions = () => {
    pencilOptions.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.id === "eraser" === userData.eraser)
          return;
        userData.eraser = !userData.eraser;
        if (userData.eraser) {
          setToEraser(button);
          return;
        }
        setToPencil(button);
      });
    });
  };

  // leftSettingsBar/filterSettings/blurFilter.js
  var setColorBlurButtons = () => {
    colorBlurButtons.forEach((button) => {
      button.ariaLabel = `${button.id}-button`;
      button.addEventListener("click", () => {
        const newBlur = 0.075 * (parseFloat(button.id.split("-")[1]) / 50);
        userData.blurVal = newBlur;
        context.filter = `blur(${newBlur}rem)`;
        colorBlurButtons.forEach((b) => {
          b.classList.remove("selected-settings");
        });
        button.classList.add("selected-settings");
      });
    });
  };

  // leftSettingsBar/filterSettings/brightnessFilter.js
  var setColorBrightnessButtons = () => {
    colorBrightnessButtons.forEach((button) => {
      button.ariaLabel = `${button.id}-button`;
      button.addEventListener("click", () => {
        if (userData.eraser)
          return;
        const newBrightness = parseInt(button.id.split("-")[1]);
        userData.brightness = newBrightness;
        circle.style.filter = `brightness(${userData.brightness}%) blur(0.2rem)`;
        context.filter = `brightness(${userData.brightness}%) blur(${userData.blurVal}rem)`;
        colorBrightnessButtons.forEach((b) => {
          b.classList.remove("selected-settings");
        });
        button.classList.add("selected-settings");
      });
    });
  };

  // blurCircleAroundMouser.js
  var createMouseListener = (event2) => {
    const mousePos = getMousePos(event2);
    circle.style.left = `calc(${mousePos.x}px - ${circle.style.width} / 2)`;
    circle.style.top = `calc(${mousePos.y}px - ${circle.style.height} / 2)`;
    circle.style.backgroundColor = userData.currentColor;
  };

  // drawing/drawingFunctionality.js
  var isDrawing = false;
  var startPoint = {
    x: 0,
    y: 0
  };
  var startDrawing = (event2) => {
    isDrawing = true;
    startPoint = {
      x: event2.clientX - canvas.getBoundingClientRect().left,
      y: event2.clientY - canvas.getBoundingClientRect().top
    };
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
  };
  var draw = (event2) => {
    if (!isDrawing)
      return;
    context.lineTo(event2.clientX - canvas.getBoundingClientRect().left, event2.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
  };
  var stopDrawing = () => {
    isDrawing = false;
  };
  canvas.width = window.innerWidth / 3 * 2;
  canvas.height = canvas.width / 4 * 6;
  context.lineWidth = getRadius(userData.size) * 2;
  context.strokeStyle = userData.currentColor;
  var addDrawEventListeners = () => {
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  };

  // drawingSim.js
  document.addEventListener("DOMContentLoaded", () => {
    setCircleCircumference();
    setPencilOptions();
    setSizeButtons();
    setColorBlurButtons();
    setColorBrightnessButtons();
    setColorButtons(colorButtons);
    dialogFunctionality(dialogList[0]);
    addDrawEventListeners(getRadius());
    document.addEventListener("mousemove", createMouseListener);
  });
})();
