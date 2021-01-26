const axios = require('axios');
const { rapidKey } = require('../secret/keys');

const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir);
  // console.log(encodedUrl);

  const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}&units=metric`,
    headers: {
      'X-RapidAPI-Key': rapidKey,
    },
  });

  const resp = await instance.get();
  if (resp.data.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }
  const data = resp.data;

  const direccion = data.name;
  const lat = data.coord.lat;
  const lng = data.coord.lon;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
