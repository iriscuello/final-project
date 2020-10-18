function displayTemp(response) {

   let temp = Math.round(response.data.main.temp);
  let faren = (temp * 9) / 5 + 32;
  let farTemp = document.querySelector("#temperature");
  farTemp.innerHTML = faren;
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
}

function tempToFar(event) {
  
  let key = "f6daddd2490e280fc02eb01a9840f82a";
  let city = "Toronto";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  
  axios.get(api).then(getCurrentTemp);
}
let fLink = document.querySelector("#farenheight");
fLink.addEventListener("click", tempToFar);

let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
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
dateDisplayed.innerHTML = `${day} ${month} ${date} ${year} ${hour}:${min}`;
