//* getCurrentPosition
const options = {
  enableHighAccuracy: true, // uses location if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Don't use a cached position
};

navigator.geolocation.getCurrentPosition(
  CurrentPositionSuccess,
  CurrentPositionError,
  options
);

function CurrentPositionSuccess(pos) {
  const {
    coords: { latitude, longitude },
  } = pos;
  console.log(latitude, longitude);
}

function CurrentPositionError(err) {
  console.log("is there any error" + err.code, err.message);
}

//* continously watching for the change in location

const target = {
  latitude: 72.4561,
  longitude: -12.3652,
};

const watchId = navigator.geolocation.watchPosition(
  WatchPositionSuccess,
  WatchPositionError,
  options
);

function WatchPositionSuccess(pos) {
  const {
    coords: { latitude, longitude },
  } = pos;

  if (target.latitude === latitude && target.longitude === longitude) {
    console.log("Location is Matching");
    navigator.geolocation.clearWatch(watchId);
  }
}

function WatchPositionError(err) {
  console.log("is there any error" + err.code, err.message);
}
