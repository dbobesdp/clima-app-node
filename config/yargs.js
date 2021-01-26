const direccion = {
  alias: 'd',
  desc: 'Dirección de la ciudad para obtener el clima',
  demnad: true,
};
const argv = require('yargs').options({
  direccion,
}).argv;

// console.log(argv.direccion);

module.exports = {
  argv,
};
