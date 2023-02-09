const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const location = process.argv[2];
if (!location) console.log("Please Provide an address");
else {
  geocode(location, (error, { latitude: lt, longitude:lg,location: lc}) => {
    if (error) {
      console.log(error);
    }

    forecast(lt, lg, (err, forecastData) => {
      if (err) {
        console.log(data);
      }
      console.log(lc);
      console.log("Data:", forecastData);
    });
  });
}
