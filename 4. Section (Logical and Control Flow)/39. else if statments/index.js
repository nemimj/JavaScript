const d = new Date();
const hour = d.getHours();
if (hour <= 12) console.log("Goohour morning");
else if (hour <= 18) console.log("Goohour Afternoon");
else if (hour <= 20) console.log("Goohour evening");
else if (hour <= 0) console.log("Goohour Nights");

// nested if
if (hour < 12) {
  console.log("Good Morning");
  if (hour === 6) console.log("wake up!");
}
