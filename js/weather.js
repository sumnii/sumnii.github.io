const API_KEY = config.apikey;
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

console.log(API_KEY);
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} | ${data.main.temp}°C`;
      city.innerText = "📍" + data.name;
    });
}

function onGeoError() {
  weather.innerText = "Can't find location.";
  city.innerText = "No weather 🥶";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
