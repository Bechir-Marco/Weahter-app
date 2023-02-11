const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express()

//Define paths for Exprexx config 
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partials = path.join(__dirname,'../templates/partials')

// Setup handelbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partials)
// Setup static directory to serve 
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
            title:'Weather App',
            name: 'Bechir Marco'

        })
    })
app.get('/about', (req, res) => {
    res.render('about', {
            title:" About Me",
            name: "Bechir Marco"
        })
})
app.get('/help', (req, res) => {
    res.render('help', {
            title:" Help Me",
            name: "Bechir Marco"
        })
})


app.get("/weather", (req, res) => {
    res.send({
        Location :"Tunis",
        Weather :"Tunisia"
    });
});

app.get('/help/*', (req, res) => {
    res.render("error", {
      title: "404",
      msg: "Help Article not found",
      name: "Bechir Marco"
    });
})
app.get('*', (req,res) => {
    res.render("error", {
       title: 'Error',
     msg: "Page Not Found",
   });
})
    

app.listen(3000, () => {
    
})