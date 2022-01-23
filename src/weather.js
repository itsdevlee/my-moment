const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const APP_KEY = "1dc8057e65913cf0c80b5aaa8c459f68";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APP_KEY +
    "&units=metric";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name} , ${data.weather[0].main} , ${data.main.temp} ℃`;
    });
  console.log(url);
}
function onGeoError() {
  alert("위치를 찾을 수 없습니다");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
