const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//let comando = argv._[0];
// console.log(argv);
// console.log('Direccion:', argv.direccion);

// lugar
//   .getLugarLatLng(argv.direccion)
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

// clima
//   .getClima(40.4165, -3.7026)
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log('Error!!!', err));

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${coords.direccion} es de ${temp}.`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.error);
