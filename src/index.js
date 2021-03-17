import { playSound } from "./modules/sounds.js";

const colors = [
  "black",
  "white",
  "hotpink",
  "cyan",
  "indigo",
  "darkblue",
  "green",
  "tomato"
];

const TOTAL_PIXELS = 100;
let selectedColor = "black";

function createColors() {
  const divColors = document.querySelector(".colors");

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    divColors.innerHTML +=`<div class="color" style="--color: ${color}"></div>`;
  }
}

function createGrid() {
  const divPixels = document.querySelector(".pixels");

  for (let i = 0; i < TOTAL_PIXELS; i++) {
    divPixels.innerHTML += "<div class=\"pixel\"></div>";
  }
}


function addColorListeners() {
    const colorElements = document.querySelectorAll(".color");
  
    for (let i = 0; i < colorElements.length; i++) {
      const divColor = colorElements[i];
      divColor.addEventListener("click", function () {
        selectedColor = colors[i];
        colorElements.forEach((element) => element.classList.remove("selected"));
        divColor.classList.add("selected");
        playSound("beep");
      });
    }
  }
  
  function addPixelListeners() {
    const pixelElements = document.querySelectorAll(".pixel");
  
    for (let i = 0; i < pixelElements.length; i++) {
      const divPixel = pixelElements[i];
      divPixel.addEventListener("click", function () {
        divPixel.style.setProperty("--color", selectedColor);
        playSound("pixel");
      });
    }
  }
  
  createColors();
  createGrid();
  addColorListeners();
  addPixelListeners();
  
  