import { sketches, sketchWidth, sketchHeight } from "../sketches";
import catImage from "../../images/cat.jpeg";

const cat = {
  name: "Cat",
  sketch: (sketch) => {
    // Must use sketch object to use p5.js features
    let img;
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, sketchHeight);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target no-hide");

      sketch.background(255, 0, 0, 255);
      img = sketch.loadImage(catImage);
    };
    sketch.draw = () => {
      sketch.image(img, sketch.mouseX, sketch.mouseY);
    };
  }
};
sketches.push(cat);
