const options = {};

navigator.geolocation.getCurrentPosition(resSuccess, resError, options);

function resSuccess(pos) {
  const {
    coords: { latitude, longitude },
  } = pos;
  console.log(latitude, longitude);
}

function resError(err) {
  console.log("is there any error" + err.code, err.message);
}
