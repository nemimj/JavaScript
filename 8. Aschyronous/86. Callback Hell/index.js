function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData("./movies.json", (data) => {
  console.log(data);
  getData("./directors.json", (data) => {
    console.log(data);
    getData("./heros.json", (data) => {
      console.log(data);
    });
  });
});

// callback hell (Also called as pyramind of Dom)

const cart = ["shoes", "pants", "shirts"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.orderSummary(function () {
      api.updateWallet();
    });
  });
});
