const circle = document.querySelector(".circle");
const line = document.querySelector(".line");

document.addEventListener("mousemove", (event) => {
  const circleBox = circle.getBoundingClientRect();

  //Circle Center
  const x = circleBox.left + circleBox.width / 2;
  const y = circleBox.top + circleBox.height / 2;

  //Mouse
  const mx = event.clientX;
  const my = event.clientY;

  //Differenec
  const x1 = mx - x;
  const y1 = my - y;

  //Length and Angle
  const length = Math.hypot(x1, y1);
  const angle = (Math.atan2(y1, x1) * 180) / Math.PI;

  line.style.left = `${x}px`;
  line.style.top = `${y}px`;
  line.style.width = `${length}px`;
  line.style.transform = `rotate(${angle}deg)`;
});
