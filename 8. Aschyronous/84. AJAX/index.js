const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/nemimj/repos");

// readyState has 5 possible values
// 0 request not initialized
// 1 server connection established
// 2 request received
// 3 processing request
// 4 request finished and responses ready

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    data.forEach((repos) => {
      console.log(repos.name);
    });
  }
};

xhr.send();
