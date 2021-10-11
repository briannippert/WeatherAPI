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
function getLocation(zip) {

}

/**
 * Function to get weather from NOAA using latitude and longitude
 * @param {Latitude} lat 
 * @param {Longitude} long 
 */
function getWeather(lat, long) {

}

/**
 * Function to invoke an HTTP request with the passed in URL and parameters. Returns a JSON object 
 * @param {} URL 
 * @param {*} paramaters 
 */
function invokeHTTPRequest(hostname, path, paramaters, body, method) {
  if (body != null) {
    const data = new TextEncoder().encode(
      JSON.stringify(body))
  }


  const options = {
    hostname: hostname,
    port: 443,
    path: path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', error => {
    throw(error)
  })
  req.write(data)
  req.end()

}