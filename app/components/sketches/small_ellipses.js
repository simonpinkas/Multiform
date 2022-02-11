import { sketches, sketchWidth, sketchHeight, createControl } from "../sketches";

const smallEllipses = {
  name: "Small Ellipses",
  sketch: (sketch) => {
    let ellipseSize = 10;
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, sketchHeight);
      createSizeControl();
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target");

      sketch.background(40, 40, 40, 255);
    };
    sketch.draw = () => {
      if (sketch.mouseIsPressed) {
        sketch.ellipse(sketch.mouseX, sketch.mouseY, ellipseSize, ellipseSize);
      }
    };
    const createSizeControl = () => {
      const element = document.createElement("input");
      const control = createControl(element, true, {
        name: "Size",
        type: "range",
        min: 5,
        max: 30,
        value: 10
      })

      element.addEventListener("input", function() {
        control.innerHTML = element.value;
        ellipseSize = element.value
      })
    }
  }
};
sketches.push(smallEllipses);
