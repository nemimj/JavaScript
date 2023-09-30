const map = L.map("map").setView([0, 0], 5);
const marker = L.marker([0, 0], 13).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

navigator.geolocation.getCurrentPosition((pos) => {
  const {
    coords: { latitude, longitude },
  } = pos;

  marker.setLatLng([latitude, longitude]).update();
  map.setView([latitude, longitude], 13);

  marker.bindPopup("<h3>Hello world</h3>This is my location");
});
