const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formulirSchema = new Schema({
    NamaCalonKades: {
        type : String,
    },
    TTL: {
        type : String,
    },
    Alamat: {
        type : String
    },
    JenisKelamin: {
        type : String
    },
    Agama: {
        type : String
    },
    StatusPerkawinan: {
        type : String
    },
    Pekerjaan: {
        type : String
    },
    RiwayatPendidikan: {
        type : String
    },
    PengalamanOrganisasi: {
        type : String
    },
    PengalamanPekerjaan: {
        type : String
    }

})

module.exports = mongoose.model('formulir', formulirSchema)