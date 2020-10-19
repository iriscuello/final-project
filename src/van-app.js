//function displayTemp(event)
let key = "f6daddd2490e280fc02eb01a9840f82a";
let city = "Toronto";
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

function tempToFar(response) {
  console.log(response.data);
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let realFeel = document.querySelector("#realFeel");
  realFeel.innerHTML =
    "Feels Like: " + Math.round(response.data.main.feels_like) + "℃";
  let high = document.querySelector("#hiTemp");
  high.innerHTML = "H " + Math.round(response.data.main.temp_max) + "℃";
  let span = document.querySelector("#lowTemp");
  span.innerHTML = "L " + Math.round(response.data.main.temp_min) + "℃";
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
  //   let temp = Math.round(response.data.main.temp);
  //   let faren = (temp * 9) / 5 + 32;
  //   let farTemp = document.querySelector("#temperature");
  //   farTemp.innerHTML = faren;
}
axios.get(api).then(tempToFar);
// function currentTemp() {

// }
// let fLink = document.querySelector("#farenheight");
// fLink.addEventListener("click", displayTemp);

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
