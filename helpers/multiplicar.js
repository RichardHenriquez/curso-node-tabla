const fs = require ('fs');
const colors = require('colors');

const addData = async(base = 5, listar, hasta) => {

    try {
        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }

        if(listar) {

            console.log(colors.green('=================='));
            console.log('Tabla de '.bold.green, colors.green.bold(base));
            console.log(colors.green('=================='));
            console.log(salida.rainbow);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `texto-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    addData
}