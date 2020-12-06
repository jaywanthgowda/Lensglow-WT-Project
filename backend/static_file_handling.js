const express = require('express');
const path= require('path');
const router =express.Router();

module.exports = () =>{
    router.use(express.static(path.join(__dirname,'../')))
    router.use(express.static(path.join(__dirname,'../public/Contact_Us_Page')))
    return router;
}