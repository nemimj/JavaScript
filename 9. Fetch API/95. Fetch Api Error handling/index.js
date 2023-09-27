// catch runs on a network error not on the status we have to manually add it.
fetch("http://hellonemi123.net")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));

// checking the status manually
fetch("http://httpstat.us/404")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Not Found");
    }
  })
  .then(() => {
    console.log("Success");
  })
  .catch((error) => console.log(error));

// Check for specific Code
fetch("http://httpstat.us/404")
  .then((res) => {
    if (res.status === 400) {
      throw new Error("Not Found");
    } else if (res.status === 500) {
      throw new Error("Server Error");
    } else if (res.status !== 200) {
      throw new Error("Request Failed");
    }
  })
  .then(() => {
    console.log("Success");
  })
  .catch((error) => console.log(error));
