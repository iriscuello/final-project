


let key = "f6daddd2490e280fc02eb01a9840f82a";
let city = "New York";
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

console.log(api);

axios.get(api).then(displayTemp);
