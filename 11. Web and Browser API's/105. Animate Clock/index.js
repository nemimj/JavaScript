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

  // Draw hour lines
  ctx.save();
  for (let i = 0; i <= 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6); // this will start rotating from where it is left (6 gives 12 , 2 gives 4)
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore(); // restore to default state

  // Draw minutes lines
  ctx.save();
  ctx.lineWidth = 4;
  for (let i = 0; i <= 60; i++) {
    // to remove the 6th minute line on hour clock
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30); // this will start rotating from where it is left (6 gives 12 , 2 gives 4)
  }
  ctx.restore();

  const hr = now.getHours();
  const mins = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hr}:${mins}:${sec}`);

  // Draw hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * mins + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = "#800000";
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * mins + (Math.PI / 1800) * sec);
  ctx.strokeStyle = "#800000";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.restore();

  // Draw second hand
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#ff7f50";
  ctx.fillStyle = "#ff7f50";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.restore();

  // small circle near the seconds

  ctx.restore();
}

requestAnimationFrame(clock);
