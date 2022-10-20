const WeatherView = require("./weatherView");

class Weather {

  constructor(api) { 
    this.city = ''
    this.api = api
  }

  fetch(city) {
    this.city = city
  }

  getWeatherData() {
    return this.api.fetchWeatherData(this.city, (weatherData) => {
      console.log(weatherData)
    });
  }

  weatherView() {
    const weatherview = new WeatherView(this.api, this.city)
    return weatherview.view()
  }
}


module.exports = Weather