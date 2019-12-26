// alert("Hello! I am a TESTER alert box!!!");

document.addEventListener("DOMContentLoaded", startPlay);

let left = document.querySelector(".left");
let right = document.querySelector(".right");
let play = document.querySelector(".playButton");
let imageSelector = document.querySelector(".image");

let myArray = [];
myArray[0] = "./images/slideA.jpg";
myArray[1] = "./images/slideB.jpg";
myArray[2] = "./images/slideC.jpg";
myArray[3] = "./images/slideD.jpg";
myArray[4] = "./images/slideE.jpg";
// console.log(myArray)

// Button to the right function
let i = 0;
function flipRight() {
  if (i < myArray.length - 1) {
    i++;
  } else {
    i = 0;
  }
  // console.log("flipRight Output", myArray[i], i);
  imageSelector.setAttribute("src", myArray[i]);
}
// Button to the left function
function flipLeft() {
  if (i < myArray.length && i > 0) {
    i--;
  } else {
    i = myArray.length - 1;
  }
  // console.log("flipLeft Output", myArray[i], i);
  imageSelector.setAttribute("src", myArray[i]);
}

// Setting time intervals

let count = 1;
function startPlay() {
  console.log("start");
  count++;
  if (count % 2 === 0 || count === 0) {
    start();
    // console.log("im #1", "count: ", count);
  } else if (count % 2 !== 0) {
    stop();
    // console.log("im #2", "count: ", count);
  }
}
let t;
function start() {
  t = setInterval(flipRight, 3000);
}
function stop() {
  clearInterval(t);
}

// Event listeners
left.addEventListener("click", flipLeft);
right.addEventListener("click", flipRight);
play.addEventListener("click", startPlay);

// Key pressDown functionality for the slides
document.addEventListener("keypress", flipRight);
document.onkeydown = function(key) {
  switch (key.keyCode) {
    case 37:
      flipLeft(); // Key press Left
      left.style.borderRightColor = "rgb(255, 255, 255)";
      break;
    case 39:
      flipRight(); // Key press Right
      right.style.borderLeftColor = "rgb(255, 255, 255)";
      break;
  }
};
document.onkeyup = function(key) {
  switch (key.keyCode) {
    case 37:
      left.style.borderRightColor = "rgb(255, 255, 255, 0.5)";
      break;
    case 39:
      right.style.borderLeftColor = "rgb(255, 255, 255, 0.5)";
      break;
  }
};

