// window.addEventListener("keypress", (e) => {
//   let cont = document.querySelector(".container");
//   cont.innerHTML = ` <div class="key">
//     ${e.key === " " ? "space" : e.key}
//     <small>e.key</small>
//   </div>
//   <div class="key">
//     ${e.keyCode}
//     <small>e.keyCode</small>
//   </div>
//   <div class="key">
//     ${e.code}
//     <small>e.code</small>
//   </div>`;
// });

const showKeys = (e) => {
  const cont = document.querySelector(".container");
  cont.innerHTML = "";

  const keys = {
    "e.key": e.key === " " ? "space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (const key in keys) {
    const div = document.createElement("div");
    div.classList.add("key");
    const small = document.createElement("small");
    const textNode = document.createTextNode(key);
    const value = document.createTextNode(keys[key]);

    small.appendChild(textNode);
    div.appendChild(value);
    div.appendChild(small);

    cont.appendChild(div);
  }
};
window.addEventListener("keypress", showKeys);
