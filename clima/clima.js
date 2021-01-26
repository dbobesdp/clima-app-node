const axios = require('axios');
const { appID } = require('../secret/keys');

const getClima = async (lat, lng) => {
  let units = 'metric';
  let resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appID}&units=${units}`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima,
};


