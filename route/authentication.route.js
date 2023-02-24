const express = require('express');
const { login, verify, register, resetPassword, updateDetails, getDetails, } = require('../controller/authentication.controller');
const {check} = require('../middleware/authentication.middleware')
const router = express.Router();

 
router.post('/register', register)
    .post('/verify', verify)
    .post('/login', login)
    .post('/reset', resetPassword)
    .post('/update', check, updateDetails)
    .get('/', check, getDetails)

module.exports = {
    router
}