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
  document.querySelector(".clear").onclick = clearCanvas;
}
// creates the original line from the pointer path
const drawLine = () => {
  let
    // first : original, second x-reflected
    a = prevX, a_ = a,
    b = prevY, b_ = h - b,
    c = currX, c_ = c,
    d = currY, d_ = h - d;

  context.lineWidth = 4;
  context.lineCap = "round";

  context.beginPath();
  // draws original line
  context.moveTo(a, b);
  context.lineTo(c, d);
  //draws first shadow line reflects across the x axis
  context.moveTo(a_, b_);
  context.lineTo(c_, d_);
  context.stroke();
  context.closePath();

  context.strokeStyle = getColor();
  context.lineWidth = 4;
  context.lineCap = "round";

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

const handlePointerMove = (e) => {
  if (draw) {
    recordPointerLocation(e);
    drawLine();
  }
}

const handlePointerDown = (e) => {
  recordPointerLocation(e);
  draw = true;
}

const getColor = () => { return document.querySelector(".color").value };

const clearCanvas = () => {
  if (confirm("Would you like to clear the canvas?")) {
    context.clearRect(0, 0, w, h);
  }
}