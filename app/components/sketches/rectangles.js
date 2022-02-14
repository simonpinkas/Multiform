import { sketches, sketchWidth, sketchHeight } from "../sketches";

const swirling = {
  name: "Swirling",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, sketchHeight);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(0);
      noiseDetail(1, 0);
      genNoiseImg();
      image(noiseImg, 0, 0);
    };
    sketch.draw = () => {
      noiseImg = createGraphics(width, height);
      noisImg.loadPixels();
      var widthd = width*pixelDensity();
      var heightd = height*pixelDensity();
      for(var i=0; i<widthd; i++){
        for (var j=0; j<heightd; j++){
          var x = i/pixelDensity();
          var y = j/pixelDensity();
          var bright = pow(noise(x/noiseScale, y/noiseScale)-0.3, 1/2.0)*400;
          noiseImg.pixels[(i+j*widthd)*4] = bright;
          noiseImg.pixels[(i+j*widthd)*4+1] = bright;
          noiseImg.pixels[(i+j*widthd)*4+2] = bright;
          noiseImg.pixels[(i+j*widthd)*4+3] = 255;
        }
      }
      noiseImg.updatePixels();
    };
  }
};
sketches.push(swirling);

