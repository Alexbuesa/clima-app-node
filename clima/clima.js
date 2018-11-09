const axios = require("axios");

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dd867e87e139b1e33fb0e7789d87a513&units=metric`);

    if (resp.data.code === 400) {
        throw new Error(`Latitud o longitud incorrectos ${resp.data.message}`);
    }

    return resp.data.main.temp

}

module.exports = {
    getClima
}