const request = require("postman-request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c910dbf9b5ee653919604459efdfbb83&query=${lat},${lon}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services.", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { temperature, feelslike } = body.current;
      callback(
        undefined,
        `It is ${temperature} degrees and feels like ${feelslike} degrees`
      );
    }
  });
};

module.exports = forecast;
