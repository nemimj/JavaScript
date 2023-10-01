/* Example of clearRect 
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

* Fill a rectangle with a color
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 100);

* Clear a rectangular area
ctx.clearRect(75, 75, 50, 50);

*/

function clock() {
  const now = new Date();
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  // Setup Canvas
  // all code goes between save and restore
  ctx.save(); // save the default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // Put x and y 250 (to middle of the rectangle)
  ctx.rotate(-Math.PI / 2); // rotate the clock to (90 deg)

  // Set Default Styles
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#f4f4f4";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  // Draw clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#800000";
  ctx.arc(0, 0, 142, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill(); // taking default color grey
  ctx.restore();

  ctx.restore(); // restore to default state
}

requestAnimationFrame(clock);
