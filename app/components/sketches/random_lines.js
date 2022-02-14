import {
  sketches,
  sketchWidth,
  createControl,
  sketchHeight,
} from "../sketches";

//  Sketch 4
const randomLines = {
  name: "Random Lines",
  sketch: (sketch) => {
    let quantity = 20;

    class Line {
      constructor(posX, posY, speedX, speedY) {
        this.posX = posX;
        this.posY = posY;
        this.speedX = speedX;
        this.speedY = speedY;
        sketch.stroke(200);
      }
      update() {
        // sketch.fill(sketch.random(0, 255));
        this.posX += this.speedX;
        this.posY += this.speedY;
        sketch.line(
          this.posX - this.speedX,
          this.posY - this.speedY,
          this.posX,
          this.posY
        );
      }
    }

    let lines = [];

    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, sketchHeight);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target");

      sketch.background(0, 0, 255, 255);
      createLines(quantity);
      setupQuantityControl();
      setupResetControl();
    };
    sketch.draw = () => {
      lines.forEach((line) => {
        line.update();
      });
    };

    const createLines = (n) => {
      for (let i = 0; i < n; i++) {
        let _line = new Line(
          sketch.random(0, sketch.width),
          sketch.random(0, sketch.height),
          sketch.random(-3, 3),
          sketch.random(-3, 3)
        );
        lines.push(_line);
      }
    };

    const setupResetControl = () => {
      let element = document.createElement("a");
      createControl(element, false, {
        class: "button",
      });
      element.innerHTML = "Reset";

      element.addEventListener("click", () => {
        resetSketch();
      });
    };

    const setupQuantityControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, true, {
        name: "Quantity",
        type: "range",
        min: 1,
        max: 2000,
        step: 1,
        value: quantity,
      });

      element.addEventListener("input", () => {
        control.innerHTML = element.value;
        quantity = element.value;
        resetSketch();
      });
    };

    const resetSketch = () => {
      sketch.background(0, 0, 255, 255);
      lines = [];
      createLines(quantity);
    };
  },
};
sketches.push(randomLines);
