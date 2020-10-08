function displayTemp(response) {
  console.log(response);
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);
}

let key = "f6daddd2490e280fc02eb01a9840f82a";
let city = "New York";
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

axios.get(api).then(displayTemp);
