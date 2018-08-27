const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('./models/User')


router.get('/sign-up', (req,res,next) => {
    res.render('sign-up')
})

module.exports = router