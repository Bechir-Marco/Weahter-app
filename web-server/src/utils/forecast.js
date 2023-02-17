const request = require("postman-request");
const forecast = ( latitude,longitude, callback) => {
  const urlWeather =
    "http://api.weatherstack.com/current?access_key=516f5691e6bc38ec80e290fe46ad28f1&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=m";

  request({ url: urlWeather, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service ", undefined);
    } else if (body.error) {
      callback("Unable To Find Location Try Again ", undefined);
    } else {
      callback(
        undefined,
        ` ${body.current.weather_descriptions}, The Temprature is ${body.current.temperature} and it feels like ${body.current.feelslike} and the Humidity is ${body.currrent.humidity}`
      );
    }
  });
};
module.exports = forecast;
