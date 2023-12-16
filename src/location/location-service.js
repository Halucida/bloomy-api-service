const dataLocation = require('./location-data.js')

const getProvinsi = async() => {
    const provinsi = dataLocation.map(data => { data.provinsi })
    console.log({ provinsi })
    return provinsi
}

module.exports = {
    getProvinsi,
    getKota
}