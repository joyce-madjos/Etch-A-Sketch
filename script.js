var gridContainer = document.getElementById("grid-container");

for (let index = 1; index <= 16; index++) {
  for (let a = 1; a <= 16; a++) {
    var tiles = document.createElement("div");
    // tiles.innerHTML = a;
    tiles.classList.add("box");
    tiles.style.width = "5%";
    tiles.style.height = "6.3%";
    gridContainer.appendChild(tiles);
  }
}

const slider = document.querySelector(".slider");
const output = document.getElementById("slider-value");

slider.addEventListener("input", () => {
  output.textContent = slider.value + "x" + slider.value;
});

// // const slider = document.querySelector('.slider');
// const thumb = slider.querySelector('.slider-thumb');

// slider.addEventListener('mouseover', () => {
//   const randomColor = getRandomColor();
//   thumb.style.backgroundColor = randomColor;
// });

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// ---------------

let randomColor = document.getElementById("random-color");
let blackColor = document.getElementById("black-button");
let whiteColor = document.getElementById("white-button");
let deleteColors = document.getElementById("delete-button");
const boxes = document.querySelectorAll(".box");
var color = document.getElementById("color");
var textColor = document.getElementById("text-color");
var mouseColor = document.getElementById("mouse-color");

hoverBoxes();

function hoverBoxes(color) {
  boxes.forEach((boxes) => {
    boxes.addEventListener("mouseover", () => {
      boxes.style.backgroundColor = color;
    });
  });
}

blackColor.addEventListener("click", () => {
  hoverBoxes("black");
  mouseColor.innerHTML = "Black";
  color.style.background = "black";
});

randomColor.addEventListener("click", () => {
  mouseColor.innerHTML = "Random";
  mouseColor.style.background= "white";
  textColor.style.background= "white";
//   linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff);
  color.style.background = "linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)";
  boxes.forEach((boxes) => {
    boxes.addEventListener("mouseover", () => {
      const randomColors = getRandomColor();
      boxes.style.backgroundColor = randomColors;
    });
  });
});

whiteColor.addEventListener("click", () => {
  mouseColor.innerHTML = "White";
  hoverBoxes("white");
  color.style.background = "white";
});

deleteColors.addEventListener("click", () => {
  mouseColor.innerHTML = "";
  hoverBoxes("white");
  color.style.background = "white";
  boxes.forEach((boxes) => {
    boxes.style.backgroundColor = "white";
  });
});
