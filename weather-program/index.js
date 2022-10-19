const got = require('got');
const apiKey = require('./apiKey');
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body); //JSON.parse(response.body) to transform the JSON string received into a JavaScript object
  console.log(weatherData)
});

