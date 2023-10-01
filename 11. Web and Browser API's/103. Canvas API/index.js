const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

// Draw Rectangle
ctx.fillStyle = "coral";
// x : y : len : bre
ctx.fillRect(10, 10, 150, 100);

// Draw Circle
// x : y : size : start : end
ctx.fillStyle = "red";
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// draw lines

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "orange";
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();
