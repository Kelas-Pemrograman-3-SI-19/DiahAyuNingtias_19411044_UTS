const formulirModel = require('../model/formulir')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        formulirModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input formulir'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input formulir'
            }))
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        formulirModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        formulirModel.findOne({
            _id: objectId(id)
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })

exports.update = (id, data) =>
        new Promise((resolve, reject) => {
            formulirModel.updateOne({
                _id: objectId(id)
            }, data).then(() => resolve({
                status: true,
                pesan: 'Berhasil Update Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update'
            }))
        })

exports.delete = (id) =>
        new Promise((resolve, reject) => {
            formulirModel.deleteOne({
                _id: objectId(id)
            }).then(() => resolve({
                status: true,
                pesan: 'Berhasil Delet Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update Data'
            }))
        })