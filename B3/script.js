const canvas = document.querySelector("#drawing");
const ctx = canvas.getContext("2d");
const exportBtn = document.querySelector("#export");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 300, 300);

ctx.strokeStyle = "black";
ctx.lineWidth = 3;

let drawing = false;
let x;
let y;

canvas.onmousedown = (event) => {
  drawing = true;
  x = event.offsetX;
  y = event.offsetY;
};

canvas.onmousemove = (event) => {
  if (!drawing) return;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();

  x = event.offsetX;
  y = event.offsetY;
};

canvas.onmouseup = canvas.onmouseleave = () => {
  drawing = false;
};

exportBtn.onclick = () => {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL();
  link.click();
};
