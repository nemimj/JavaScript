let x;
let d = new Date();
X = d.toString(); // string format of the time and date
X = d.getTime(); // gives the time stamp of the time and date
X = d.value0f(); // gives the same result as the above
x = d.getFullYear(); // 2023
X = d.getMonth(); // remember index starts from 0
x = d.getMonth() + 1; // 9
x = d.getDate(); // 22
X = d.getDay(); // 5

X = d.getHours();
X = d.getMinutes();
X = d.getSeconds();
x = d.getMilliseconds();

X = Intl.DateTimeFormat("en-US").format(d);
X = Intl.DateTimeFormat("en-GB").format(d);
X = Intl.DateTimeFormat("default").format(d);
X = Intl.DateTimeFormat("default", { month: "long" }).format(d);
x = d.toLocaleString("default", { month: "short" });
d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/Los_Angeles",
});

console.log(x);
