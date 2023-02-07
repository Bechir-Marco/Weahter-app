const request = require("postman-request");

const urlWeather =
  "http://api.weatherstack.com/current?access_key=516f5691e6bc38ec80e290fe46ad28f1&query=New%20York&unit=m";

request({ url: urlWeather, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service');

  } else if (response.body.error) {
    console.log('Unable to find location');
  }
  else {
    console.log(
      ` ${response.body.current.weather_descriptions} This is Your Temprature ${response.body.current.temperature} and it feels like ${response.body.current.feelslike}`
    );
  }
  
});

const urlMap =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/-122.463%2C%2037.7648.json?access_token=pk.eyJ1IjoibWFyY29zOTciLCJhIjoiY2xkdGYyb3hrMDNmODNycndjeDk2ZmtpcSJ9.R9YXetHlBW4zIovjXNsVMA&limit=1";

request({ url: urlMap, json: true }, (error, res) => {
  
  
  
  if (error) {
    console.log("Unable to connect to Geocoding Service");
  } else if (res.body.features.length === 0) {
    console.log("Unable To Find Location Try Again With Search Term");
  } else {
    latitude = res.body.features[0].center[0];
    longitude = res.body.features[0].center[1];
    console.log(
      `This Is Your Latitude ${latitude} And Your Longitude is  ${longitude}`
    );
  }
})
