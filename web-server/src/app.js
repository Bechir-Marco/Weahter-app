const path = require('path');
const express = require('express');



const publicDirectoryPath = path.join(__dirname,'../public');
const aboutDirectoryPath = path.join(__dirname,'../public/about.html');
const helpDirectoryPath = path.join(__dirname,'../public/help.html');

const app = express()

app.use(express.static(publicDirectoryPath))

app.get("/weather", (req, res) => {
    res.send({
        Location :"Tunis",
      Weather :"Tunisia"
  });
});


app.listen(3000, () => {
    
})