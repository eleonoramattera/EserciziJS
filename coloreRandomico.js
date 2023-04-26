const btn = document.querySelector(".btn");
const body = document.querySelector("body");

let colors = ["red", "green", "violet", "yellow", "blue", "orange"];

body.style.backgroundColor = "brown";

btn.addEventListener("click", addColor);

function addColor() {
  console.log("funzionaa");
  let color = parseInt(Math.random() * colors.length);
  body.style.background = colors[color];
}
