const Weather = require("./weather");

describe('Weather', () => {
  it('gets the repo data fetched by the Api class', () => {
    
    let mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: 'London',
          description: 'Some fake description'
        });
      }
    }
    const weather = new Weather(mockedApi);

    weather.fetch('London');
    
    expect(weather.getWeatherData()).toEqual [{
      name: 'London',
      description: 'Some fake description'}]
  });

  it('gets returns the repo data in a nice form', () => {
    
    let mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          coord: { lon: -0.1257, lat: 51.5085 },
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'moderate rain',
              icon: '10d'
            }
          ],
          base: 'stations',
          main: {
            temp: 15.82,
            feels_like: 15.94,
            temp_min: 14.69,
            temp_max: 16.82,
            pressure: 1006,
            humidity: 95
          },
          visibility: 7000,
          wind: { speed: 1.54, deg: 260 },
          rain: { '1h': 1.43 },
          clouds: { all: 20 },
          dt: 1666262331,
          sys: {
            type: 2,
            id: 2075535,
            country: 'GB',
            sunrise: 1666247552,
            sunset: 1666285067
          },
          timezone: 3600,
          id: 2643743,
          name: 'London',
          cod: 200
        });
      }
    }
    
    const weather1 = new Weather(mockedApi);
    weather1.fetch('London');
    
    //expect(weather.weatherView()).toInclude('City: London');
    //expect(weather1.weatherView()).toContain('Humidity: 95');
  });
});