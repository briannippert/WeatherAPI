const express = require('express')
const app = express()
//use .env to replace this parameter.
const port = 8080

app.get('/', (req, res) => {
  res.send('API Running')
})

app.get("/getWeather", (req, res) => {
  res.send('API Running')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * Function to get the latitude and longitude from a zip code.
 * @param {Zip Code} zip 
 */
function getLocation(zip){

}

/**
 * Function to get weather from NOAA using latitude and longitude
 * @param {Latitude} lat 
 * @param {Longitude} long 
 */
function getWeather(lat ,long ){

}