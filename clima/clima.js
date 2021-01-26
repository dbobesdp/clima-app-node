const axios = require('axios');

const getClima = async (lat, lng) => {
  let appID = '96446ab4809fd1c71477a7db77c3b7a4';
  let units = 'metric';
  let resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appID}&units=${units}`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima,
};


