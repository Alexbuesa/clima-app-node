const argv = require("./config/yargs").argv;

const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temp} grados`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));