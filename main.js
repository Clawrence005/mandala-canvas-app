let canvas,
  context,
  w,
  h,
  prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  draw = false;

const init = () => {
  canvas = document.querySelector("canvas");
  context = canvas.getContext("2d");
  w = canvas.width;
  h = canvas.height;

  canvas.onpointermove = handlePointerMove;
  canvas.onpointerdown = handlePointerDown;
  canvas.onpointerup = stopDrawing;
  canvas.onpointerout = stopDrawing;
}
// creates the original line from the pointer path
const drawLine = () => {
  let a = prevX,
    b = prevY,
    c = currX,
    d = currY;

  context.lineWidth = 4;
  context.lineCap = "round";

  context.beginPath();
  context.moveTo(a, b);
  context.lineTo(c, d);
  context.stroke();
  context.closePath();
}

const stopDrawing = () => {
  draw = false;
}

const recordPointerLocation = (e) => {
  prevX = currX;
  prevY = currY;
  currX = e.clientX - canvas.offsetLeft;
  currY = e.clientY - canvas.offsetTop;
}