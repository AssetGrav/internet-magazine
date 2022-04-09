const express = require('express')
const Subject = require('../models/Subject')
const router = express.Router({mergeParams: true})

router.get('/', async (req, res) => {
    try {
        const list = await Subject.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: 'на сервере произошла ошибкаю Попробуйте позже'
        })
    }
} )

module.exports = router