import "./styles/style.css";
import "./components/sketches/lines";
import "./components/sketches/random_lines";
import "./components/sketches/cat";
import "./components/sketches/small_ellipses";
import "./components/sketches/particles";
import "./components/sketches/bezier";

import { sketches, switchSketch } from "./components/sketches";
import { init, setCanvasTexture } from "./components/renderer";
import { waitForCanvas } from "./components/utils";

let currentSketch;
let rendererIsLoaded = init();

window.addEventListener("load", () => {
  waitForCanvas().then(() => {
    let controls = document.querySelectorAll(".app-control");
    controls.forEach((e) => {
      let toggle = e.querySelector(".toggle");
      e.addEventListener("mouseup", () => {
        if (!e.classList.contains("active")) {
          e.classList.add("active");
        }
      });

      toggle.addEventListener("click", (event) => {
        if (e.classList.contains("active")) {
          e.classList.remove("active");
        }
      });
    });
  });
  if (rendererIsLoaded) {
    createSwitcher();
  }
});

function createSwitcher() {
  currentSketch = switchSketch(0);
  const switcherContainer = document.getElementById("p5-switcher");
  sketches.forEach(function (e, i) {
    // For each sketch in sketches array, create a new option element + text node
    // from name in object. Use index as the value, for use in switch
    let element = document.createElement("div");
    element.className = "switcher";
    element.id = e.name.replace(/\s/g, "");
    element.value = i;
    switcherContainer.appendChild(element);
    if (currentSketch === e) {
      element.selected = true;
    }
    element.addEventListener("click", function () {
      currentSketch = switchSketch(this.value);
      setCanvasTexture();
    });
  });
}
