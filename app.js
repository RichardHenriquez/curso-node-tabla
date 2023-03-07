const {addData} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');

console.clear();
//const [, , argv3] = process.argv;
//base = (argv3);

addData(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'Creado'.green))
    .catch(err => console.log(err));

