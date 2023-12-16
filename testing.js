// const axios = require('axios')
// const fs = require('fs')
// const FormData = require('form-data')

// const api = async(url, data, token) => {
//     for (let i = 0; i < data.length; i++) {
//         const formData = new FormData()
//         const { nama, grade, price, weight, description, imageFilePath } = data[i]
//         formData.append('nama', nama)
//         formData.append('grade', grade)
//         formData.append('price', price)
//         formData.append('weight', weight)
//         formData.append('description', description)
//         if (imageFilePath) {
//             const imageStream = fs.createReadStream(imageFilePath)
//             formData.append('image', imageStream)
//         }
//         try {
//             const response = await axios.post(url, formData, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data',
//                 },
//             })
//             console.log(response.data.message)
//         } catch (error) {
//             console.error(error.response.data.message)
//         }
//     }
// }

// const URL = 'https://api-service-vixypb3qiq-uc.a.run.app/product'

// const TOKEN = ''

// const DATA = [
//     { nama: 'Ikan Tuna', grade: 'A', price: 50000, weight: 100, description: 'Lorem ipsum', imageFilePath: 'testing.jpg' },
//     { nama: 'Ikan Lele', grade: 'A', price: 20000, weight: 120, description: 'Lorem ipsum', imageFilePath: 'testing.jpg' },
//     { nama: 'Ikan Tenggiri', grade: 'B', price: 38000, weight: 200, description: 'Lorem ipsum', imageFilePath: 'testing.jpg' },
// ]

// api(URL, DATA, TOKEN)



const dataLocation = [{
    provinsi: 'DKI Jakarta',
    kota: [
        'Jakarta Barat',
        'Jakarta Timur',
        'Jakarta Utara',
        'Jakarta Selatan',
        'Jakarta Pusat',
        'Kepulauan Seribu'
    ]
}, {
    provinsi: 'Jawa Barat',
    kota: [
        'Bekasi',
        'Cikarang',
        'Cibitung'
    ]
}]

const provinsi = dataLocation.map(data => {
    return data.provinsi
})

const kota = dataLocation.map(data => {
    if (data.provinsi === 'Jawa Barat') {
        return data.kota
    }
})

console.log(kota)