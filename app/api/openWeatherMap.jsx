const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f8fa8edb72cf4ea73acb6b21df7b75a4'

module.exports = {
  getTemp(location) {
      let encodedLocation = encodeURIComponent(location);
      let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestURL).then(function(res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data;
        }
      }, function(res) {
          throw new Error(res.message);
      });
  }
}
