import {
  sketches,
  sketchWidth,
  sketchHeight,
  createControl
} from "../sketches";
import { hexToRgb } from "../utils";

const lines = {
  name: "Lines",
  sketch: (sketch) => {
    let offset = 0;
    let linesValue, speedValue, backgroundValues, strokeValues;

    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, sketchHeight);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target no-hide");
      linesValue = sketch.setupLinesControl();
      speedValue = sketch.setupSpeedControl();
      backgroundValues = sketch.setupBackgroundControl();
      strokeValues = sketch.setupStrokeControl();
      sketch.background(hexToRgb(backgroundValues));
      sketch.stroke(hexToRgb(strokeValues));
    };
    sketch.draw = () => {
      for (let i = 0; i < sketch.width; i = i + linesValue) {
        sketch.line(i, 0 + offset, i, 0);
      }
      offset += speedValue;
      if (offset > sketch.height) {
        offset = 0;
        sketch.background(backgroundValues);
        sketch.stroke(strokeValues);
      }
    };

    sketch.setupLinesControl = () => {
      // Create the element
      let element = document.createElement("input");

      // Use helper function to create control. First parameter is the control element itself. Second parameter is an object with control attributes. Name property is displayed. createControl returns its label element for display the value.
      let control = createControl(element, true, {
        name: "Line Spacing",
        type: "range",
        max: 40,
        min: 1,
        value: 3
      });

      // // Listen to input changes and set readable value
      element.addEventListener("input", () => {
        linesValue = parseInt(element.value);
        control.innerHTML = linesValue;
        sketch.background(backgroundValues);
        offset = 0;
      });

      // // Return value of input for sketch
      return parseInt(element.value);
    };

    sketch.setupSpeedControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, true, {
        name: "Speed",
        type: "range",
        max: 4,
        min: 0,
        value: 1,
        step: 0.1
      });
      element.addEventListener("input", () => {
        speedValue = parseFloat(element.value);
        control.innerHTML = speedValue;
      });
      return parseFloat(element.value);
    };

    sketch.setupBackgroundControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, true, {
        name: "Background",
        type: "color",
        value: "#000000"
      });
      element.addEventListener("input", () => {
        backgroundValues = hexToRgb(element.value);
        control.innerHTML = backgroundValues;
        sketch.background(backgroundValues);
      });
      return element.value;
    };

    sketch.setupStrokeControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, true, {
        name: "Stroke",
        type: "color",
        value: "#ffffff"
      });
      element.addEventListener("input", () => {
        strokeValues = hexToRgb(element.value);
        control.innerHTML = strokeValues;
        sketch.stroke(strokeValues);
      });
      return element.value;
    };
  }
};
sketches.push(lines);
