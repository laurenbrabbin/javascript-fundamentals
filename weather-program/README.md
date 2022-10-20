## A Weather program

## Objectives
Test-drive a program that fetches data from an API.

## Challenge

1. Implement the class WeatherApi that fetches the current weather for a given city using got. It should also accept a callback function, which will get called once the data has been received and parsed to an object:

```javascript
const api = new WeatherApi();

api.fetchWeatherData('London', (weatherData) => {
  console.log(weatherData);
});
```

2. Test-drive the class Weather, which uses the class WeatherApi to get the weather for a given city. Make sure the dependency on WeatherApi is mocked.

```javascript
const api = new WeatherApi();
const weather = new Weather(api);

weather.fetch('Bristol');

weather.getWeatherData();
```

You'll now if it works if (in order of important to less important):

1. The code above works and you get the correct weather data from getWeatherData().
2. Your tests pass.
3. You can break the class WeatherApi and your unit tests for Weather still pass.
