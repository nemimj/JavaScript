function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getData("./movies.json")
  .then((movies) => {
    console.log(movies);
    return getData("./actors.json");
  })
  .then((actors) => {
    console.log(actors);
    return getData("./directors.json");
  })
  .then((directors) => {
    console.log(directors);
  })
  .catch(() => {
    console.log("something went wrong");
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
