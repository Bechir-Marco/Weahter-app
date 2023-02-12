const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const app = express();

//Define paths for Exprexx config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, "../templates/partials");

// Setup handelbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partials);
// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Bechir Marco",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: " About Me",
    name: "Bechir Marco",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: " Help Me",
    name: "Bechir Marco",
  });
});

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You Must provide an address!'
        })
    }
    geocode(req.query.address, (error, { latitude: lt, longitude: lg, location: lc }) => {
      
      if (error) {
        return res.send({ error });
      }
      forecast(lt, lg, (err, forecastData) => {
        if (err) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location: lc,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "404",
    msg: "Help Article not found",
    name: "Bechir Marco",
  });
});
app.get("*", (req, res) => {
  res.render("error", {
    title: "Error",
    msg: "Page Not Found",
  });
});

app.listen(3000, () => {});
