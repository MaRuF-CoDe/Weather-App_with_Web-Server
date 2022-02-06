const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dde5a18e7933428cdfbb9fa9338272f7&query='+ latitude +','+ longitude 
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service',undefined)
        } else if (body.error) {
            callback('Error Code ' + body.error.code + '.' + body.error.info,undefined);
        } else {
            callback(undefined,body.current.weather_descriptions[0] + ' .It is currently ' + body.current.temperature + ' degree.' + 'But feels like ' + body.current.feelslike + ' degree');
                
        }
    })
}

module.exports = forecast;