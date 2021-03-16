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