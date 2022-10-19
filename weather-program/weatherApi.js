const got = require('got');
const apiKey = require('./apiKey');

class WeatherApi {
  
  fetchWeatherData(city, callBack) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(apiUrl).then((response) => {
      weatherData = callBack(JSON.parse(response.body)); //JSON.parse(response.body) to transform the JSON string received into a JavaScript object
      console.log(weatherData)
    });
  }
}

module.exports = WeatherApi