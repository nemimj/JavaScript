// api : https://api.chucknorris.io/jokes/random

document.querySelector(".joke-btn").addEventListener("click", () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        let data = JSON.parse(this.responseText);
        document.querySelector("#joke").innerText = data.value;
      } else {
        document.querySelector("#joke").innerText = "SOmething has happened ";
      }
    }
  };
  xhr.send();
});
