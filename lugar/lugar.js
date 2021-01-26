const axios = require('axios');

const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir);
  console.log(encodedUrl);

  const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}&units=metric`,
    headers: {
      'X-RapidAPI-Key': '40a16bd998msh93736ded05727acp157db6jsn60f01351f1d3',
    },
  });

  const resp = await instance.get();
  if(resp.data.length === 0){
      throw new Error(`No hay resultados para ${dir}`);
  }
  const data = resp.data;
  //console.log(data);
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
    getLugarLatLng
}