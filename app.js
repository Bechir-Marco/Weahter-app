const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=516f5691e6bc38ec80e290fe46ad28f1&query=New%20York";

request({ url: url }, (erro, response) => {
    const data = JSON.parse(response.body)
    console.log(
      `This is Your Temprature ${data.current.temperature} and it feels like ${data.current.feelslike}`
    );
})
