const router = require('express').Router()
const formulirController = require('../controller/formulir')

router.post('/insert', (req,res) => {
    formulirController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getAll', (req,res) => {
    formulirController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    formulirController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    formulirController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/delete/:id', (req, res) => {
    formulirController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router