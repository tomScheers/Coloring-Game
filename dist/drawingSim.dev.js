"use strict";

var _userData = require("./userData.js");

var _colorSettings = require("./leftSettingsBar/colorSettings.js");

var _variables = require("./variables.js");

var _customColorSettings = require("./leftSettingsBar/customColorSettings.js");

var _arrayMap = require("./arrayMap.js");

console.log(_arrayMap.blurMap, _arrayMap.brightnessMap);

var getRadius = function getRadius() {
  switch (_userData.userData.size) {
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

var getMousePos = function getMousePos(event) {
  return {
    x: event.clientX,
    y: event.clientY
  };
};

var isDrawing = false;
var rect;
var ctx;
var startPoint = {
  x: 0,
  y: 0
};

var startDrawing = function startDrawing(event) {
  isDrawing = true;
  startPoint = {
    x: event.clientX - rect.getBoundingClientRect().left,
    y: event.clientY - rect.getBoundingClientRect().top
  };
  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
};

var draw = function draw(event) {
  if (!isDrawing) return;
  ctx.lineTo(event.clientX - rect.getBoundingClientRect().left, event.clientY - rect.getBoundingClientRect().top);
  ctx.stroke();
};

var stopDrawing = function stopDrawing() {
  isDrawing = false;
};

var currentColor = "rgb(".concat(_userData.userData.redVal, ", ").concat(_userData.userData.greenVal, ", ").concat(_userData.userData.blueVal, ")");

var updateCurrentColor = function updateCurrentColor() {
  currentColor = "rgb(".concat(_userData.userData.redVal, ", ").concat(_userData.userData.greenVal, ", ").concat(_userData.userData.blueVal, ")");
};

document.addEventListener("DOMContentLoaded", function () {
  _variables.circle.id = "circle";
  _variables.circle.style.background = currentColor;

  var setCircleCircumference = function setCircleCircumference(s) {
    _variables.circle.style.width = "".concat(s, "rem");
    _variables.circle.style.height = "".concat(s, "rem");
  };

  setCircleCircumference(getRadius());
  document.body.appendChild(_variables.circle);

  _variables.pencilOptions.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.id === "eraser" === _userData.userData.eraser) return;
      _userData.userData.eraser = button.id === "eraser";

      if (_userData.userData.eraser) {
        setCircleCircumference(getRadius() * 1.5);
        _variables.context.lineWidth = getRadius(_userData.userData.size) * 10;
        _variables.context.filter = "blur(".concat(_userData.userData.blurVal, "rem)");
        _variables.context.strokeStyle = _userData.userData.lockedSquareColor;
        _variables.circle.style.background = _userData.userData.lockedSquareColor;

        _variables.colorButtons.forEach(function (b) {
          b.style.backgroundColor = _userData.userData.lockedSquareColor;
          b.classList.remove("selected-settings");
        });

        _variables.colorBlurButtons.forEach(function (b) {
          b.style.backgroundColor = _userData.userData.lockedSquareColor;
        });

        _variables.colorBrightnessButtons.forEach(function (b) {
          b.style.backgroundColor = _userData.userData.lockedSquareColor;
          b.classList.remove("selected-settings");
          b.classList.add("eraser-light");
        });

        return;
      }

      _variables.colorButtons.forEach(function (b) {
        b.classList.remove("selected-settings");
        var color = _userData.userData.colorMap[b.id];
        b.style.backgroundColor = "rgb(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ")");
      });

      _variables.colorButtons[0].classList.add("selected-settings");

      _variables.colorBrightnessButtons[0].classList.add("selected-settings");

      button.classList.add("selected-settings");
      _userData.userData.redVal = 255;
      _userData.userData.greenVal = 0;
      _userData.userData.blueVal = 0;
      updateCurrentColor();
      _variables.circle.style.background = currentColor;
      _variables.context.strokeStyle = currentColor;
      setCircleCircumference(getRadius() * 1.5);
      _variables.context.lineWidth = getRadius(_userData.userData.size) * 2;
      _variables.context.filter = "blur(".concat(_userData.userData.blurVal, "rem)");

      _variables.colorBlurButtons.forEach(function (b) {
        b.style.backgroundColor = currentColor;
      });

      _variables.colorBrightnessButtons.forEach(function (b) {
        b.style.backgroundColor = currentColor;
        b.classList.remove("eraser-light");
      });
    });
  });

  _variables.colorBlurButtons.forEach(function (button) {
    button.style.filter = "blur(".concat(_arrayMap.blurMap[button.id], "rem)");
    button.style.backgroundColor = currentColor;
    button.addEventListener("click", function () {
      var newBlur = _arrayMap.blurMap[button.id];
      _userData.userData.blurVal = newBlur;
      _variables.context.filter = "blur(".concat(newBlur, "rem)");

      _variables.colorBlurButtons.forEach(function (b) {
        b.classList.remove("selected-settings");
      });

      button.classList.add("selected-settings");
    });
  });

  (0, _colorSettings.setColorButtons)(_variables.colorButtons);

  _variables.colorBrightnessButtons.forEach(function (button) {
    button.style.backgroundColor = currentColor;
    button.addEventListener("click", function () {
      if (_userData.userData.eraser) return;
      var newBrightness = _arrayMap.brightnessMap[button.id];
      _userData.userData.brightness = newBrightness;
      _variables.circle.style.filter = "brightness(".concat(_userData.userData.brightness, "%) blur(0.2rem)");
      _variables.context.filter = "brightness(".concat(_userData.userData.brightness, "%) blur(").concat(_userData.userData.blurVal, "rem)");

      _variables.colorBrightnessButtons.forEach(function (b) {
        b.classList.remove("selected-settings");
      });

      button.classList.add("selected-settings");
    });
  });

  _variables.sizeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var selectedSizeValue = button.value;
      _userData.userData.size = "".concat(selectedSizeValue);

      if (_userData.userData.eraser) {
        setCircleCircumference(getRadius() * 1.5);
        _variables.context.lineWidth = getRadius(_userData.userData.size) * 10;
        return;
      }

      setCircleCircumference(getRadius());
      _variables.context.lineWidth = getRadius(_userData.userData.size) * 2;
    });
  });

  document.addEventListener("mousemove", function (event) {
    var mousePos = getMousePos(event);
    _variables.circle.style.left = "calc(".concat(mousePos.x, "px - ").concat(_variables.circle.style.width, " / 2)");
    _variables.circle.style.top = "calc(".concat(mousePos.y, "px - ").concat(_variables.circle.style.height, " / 2)");
  });
  rect = _variables.canvas;
  ctx = _variables.context;
  _variables.canvas.width = window.innerWidth / 2 * 3;
  _variables.canvas.height = _variables.canvas.width / 4 * 6;
  _variables.context.lineWidth = getRadius(_userData.userData.size) * 2;
  _variables.context.strokeStyle = currentColor;

  _variables.canvas.addEventListener("mousedown", startDrawing);

  _variables.canvas.addEventListener('mousemove', draw);

  _variables.canvas.addEventListener('mouseup', stopDrawing);

  _variables.canvas.addEventListener('mouseout', stopDrawing);

  (0, _customColorSettings.dialogFunctionality)(_variables.dialogList[0]);
});