const express = require('express')

const contactUsRoute = require('./routes/contact-us-route')
const defaultRoute = require('./routes/index')

const router = express.Router();

module.exports = ()=>{
    router.use('/',defaultRoute());
    router.use('/contact-us',contactUsRoute());
    return router;
}