
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
}


module.exports = Weather