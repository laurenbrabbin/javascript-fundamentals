const Weather = require("./weather");

describe('Weather', () => {
  it('gets the repo data fetched by the Api class', () => {
    
    const mockedApi = {
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
});