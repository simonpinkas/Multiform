import p5 from "p5";

export const sketchWidth = 400;
export const sketchHeight = 400;

export let sketches = [];

let currentSketch;
export let currentSketchControls = [];

export const createControl = (e, labels, options) => {
  const controls = document.getElementById("p5-controls");
  let container = document.createElement("div");
  let label = document.createElement("label");
  let value = document.createElement("span");
  container.classList.add("option");
  label.innerHTML = options.name;
  for (const attribute in options) {
    e.setAttribute(attribute, options[attribute]);
  }

  if (labels) {
    container.appendChild(label);
    label.appendChild(value);
  }
  value.innerHTML = e.value;
  container.appendChild(e);
  controls.appendChild(container);
  currentSketchControls.push(container);
  return value;
};

// Sketch switching mechanism
export const switchSketch = (n) => {
  console.log(sketches);

  if (currentSketch) {
    if (currentSketchControls.length > 0) {
      currentSketchControls.forEach((e) => {
        e.remove();
      });
      currentSketchControls = [];
    }
    currentSketch.remove();
  }
  currentSketch = new p5(sketches[n].sketch, "p5-container");
  // Return active sketch object
  return sketches[n];
};
