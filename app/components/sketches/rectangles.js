import { sketches, sketchWidth, sketchHeight } from "../sketches";

const rectangles = {
  name: "Rectangles",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, sketchHeight);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(0, 255, 255, 255);
    };
    sketch.draw = () => {
      sketch.rect(sketch.mouseX, sketch.mouseY, 100, 100);
    };
  }
};
sketches.push(rectangles);
