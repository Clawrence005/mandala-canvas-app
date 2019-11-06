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
}