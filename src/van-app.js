let now = new Date();
let hour = now.getHours();
let twelve = hour % 12 || 12;
let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}
let date = now.getDate();
let year = now.getFullYear();
let months = [
  " January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let dateDisplayed = document.querySelector("#dateTime");
dateDisplayed.innerHTML = `${day} ${month} ${date} ${year} ${twelve}:${min}`;

function tempDisplay(response) {
  console.log(response.data);
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let realFeel = document.querySelector("#realFeel");
  realFeel.innerHTML =
    "Feels Like: " + Math.round(response.data.main.feels_like) + "  ℃";

  celTemp = Math.round(response.data.main.temp);

  let high = document.querySelector("#hiTemp");
  high.innerHTML = "H " + Math.round(response.data.main.temp_max) + "  ℃";
  let span = document.querySelector("#lowTemp");
  span.innerHTML = "L " + Math.round(response.data.main.temp_min) + "  ℃";
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML =
    "Wind Speed: " + Math.round(response.data.wind.speed) + " km/h";
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML =
    "Humidity: " + Math.round(response.data.main.humidity) + " %";
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}

function forecastDisplay(response) {
  console.log(response.data);
  let tuesTempHi = document.querySelector(".tues");
  let tuesTempLow = document.querySelector("#tues");
  let tuesIcon = document.querySelector("#fIconTues");

  let wedtuesTempHi = document.querySelector(".wed");
  let wedTempLow = document.querySelector("#wed");
  let wedIcon = document.querySelector("#fIconWed");

  let thursTempHi = document.querySelector(".thurs");
  let thursTempLow = document.querySelector("#thurs");
  let thursIcon = document.querySelector("#fIconThurs");

  let friTempHi = document.querySelector(".fri");
  let friTempLow = document.querySelector("#fri");
  let friIcon = document.querySelector("#fIconFri");

  let satTempHi = document.querySelector(".sat");
  let satTempLow = document.querySelector("#sat");
  let satIcon = document.querySelector("#fIconSat");

  tuesTempHi.innerHTML = Math.round(response.data.list[3].main.temp_max);
  tuesTempLow.innerHTML = Math.round(response.data.list[3].main.temp_min);
  tuesIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png`
  );

  wedtuesTempHi.innerHTML = Math.round(response.data.list[11].main.temp_max);
  wedTempLow.innerHTML = Math.round(response.data.list[11].main.temp_min);
  wedIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[11].weather[0].icon}@2x.png`
  );

  thursTempHi.innerHTML = Math.round(response.data.list[19].main.temp_max);
  thursTempLow.innerHTML = Math.round(response.data.list[19].main.temp_min);
  thursIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[19].weather[0].icon}@2x.png`
  );

  friTempHi.innerHTML = Math.round(response.data.list[27].main.temp_max);
  friTempLow.innerHTML = Math.round(response.data.list[27].main.temp_min);
  friIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[27].weather[0].icon}@2x.png`
  );

  satTempHi.innerHTML = Math.round(response.data.list[35].main.temp_max);
  satTempLow.innerHTML = Math.round(response.data.list[35].main.temp_min);
  satIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[35].weather[0].icon}@2x.png`
  );
}

function searchCity(city) {
  let key = "f6daddd2490e280fc02eb01a9840f82a";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(api).then(tempDisplay);

  api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
  axios.get(api).then(forecastDisplay);
}

function returnInputData(event) {
  event.preventDefault();
  let dataReturn = document.querySelector("#searchEngine");
  searchCity(dataReturn.value);
}

function convertTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  celLink.classList.remove("active");
  fahrenLink.classList.add("active");
  let fahrenTemp = (celTemp * 9) / 5 + 32;

  tempElement.innerHTML = Math.round(fahrenTemp);
}

function convertTempToCel(event) {
  event.preventDefault();
  let celTempElement = document.querySelector("#temperature");
  celLink.classList.add("active");
  fahrenLink.classList.remove("active");

  celTempElement.innerHTML = celTemp;
}

let celTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", returnInputData);

let fahrenLink = document.querySelector("#fahren");
fahrenLink.addEventListener("click", convertTemp);

let celLink = document.querySelector("#cel");
celLink.addEventListener("click", convertTempToCel);

searchCity("Toronto");
