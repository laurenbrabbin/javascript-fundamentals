class WeatherView {
  
  constructor(weatherApi, location) { 
    this.city = location
    this.api = weatherApi
  }

   view() {
    return this.api.fetchWeatherData(this.city, (weatherData) => {
      console.log(`City: ${this.city}`)
      console.log(`Weather: ${weatherData.weather[0].main}`)
      console.log(`Tempreture: ${weatherData.main.temp}`)
      console.log(`Feels like: ${weatherData.main.feels_like}`)
      console.log(`Humidity: ${weatherData.main.humidity}`)
    });
  };
}

module.exports = WeatherView
