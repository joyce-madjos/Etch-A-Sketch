// Get the elements from hmtl
let gridContainer = document.getElementById("grid-container");
let randomColor = document.getElementById("random-color");
let blackColor = document.getElementById("black-button");
let whiteColor = document.getElementById("white-button");
let deleteColors = document.getElementById("delete-button");
let color = document.getElementById("color");
let textColor = document.getElementById("text-color");
let mouseColor = document.getElementById("mouse-color");
let withBorder = document.getElementById("with-border");
let withOutBorder = document.getElementById("w-o-border");

// Default grid
setGridLines("16");

// Creation of grid
function setGridLines(gridLinesNumber) {
  gridContainer.innerHTML = "";
  for (let index = 1; index <= gridLinesNumber; index++) {
    for (let a = 1; a <= gridLinesNumber; a++) {
      let boxes = document.createElement("div");
      boxes.classList.add("box");
      boxes.style.width = "auto";
      boxes.style.height = "auto";
      boxes.style.flexBasis = "calc(100% / " + gridLinesNumber + ")";
      gridContainer.appendChild(boxes);
    }
  }
}

// Get user's desired number of grid
function getNumber() {
  let numberInput = document.getElementById("set-grid-boxes");
  let output = document.getElementById("grid-value");
  let number = numberInput.value;
  if (number > 100) {
    output.textContent = "Max: 100";
    number = 100;
  } else {
    output.textContent = number + "x" + number;
  }

  // Pass the user's desired number to create the grid
  setGridLines(number);
}

// Responsible for coloring the grid
function hoverBoxes(color, boxes) {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = color;
    });
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

blackColor.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".box");
  hoverBoxes("black", boxes);
  mouseColor.innerHTML = "Black";
  color.style.background = "black";
});

randomColor.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".box");
  mouseColor.innerHTML = "Random";
  color.style.background =
    "linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)";
  boxes.forEach((boxes) => {
    boxes.addEventListener("mouseover", () => {
      const randomColors = getRandomColor();
      boxes.style.backgroundColor = randomColors;
    });
  });
});

whiteColor.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".box");
  mouseColor.innerHTML = "White";
  hoverBoxes("white", boxes);
  color.style.background = "white";
});

deleteColors.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".box");
  mouseColor.innerHTML = "";
  hoverBoxes("white", boxes);
  color.style.background = "white";
  boxes.forEach((boxes) => {
    boxes.style.backgroundColor = "white";
  });
});

withBorder.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.border = "1px solid black";
  });
});

withOutBorder.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.border = "none";
  });
});
