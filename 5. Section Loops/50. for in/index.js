const colors = {
  color1: "red",
  color2: "blue",
  color3: "green",
  color4: "white",
};

for (const key in colors) {
  console.log(key, colors[key]);
}

let colorArr = ["red", "blue", "green"];
for (const key in colorArr) console.log(colors[key]);
