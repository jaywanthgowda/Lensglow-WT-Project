const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const router =  express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
//router.use(express.static())

module.exports = ()=> {
    router.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'../../public/Contact_Us_Page/contact-us.html'));
    })
    

    router.post('/contact-us',(req,res)=>{

        const data = {
            'Name': req.body.name,
            'E-Mail' : req.body.email,
            'Subject' : req.body.subject,
            'Message' : req.body.message
        }

        //mongodb://127.0.0.1:27017/

        MongoClient.connect('mongodb://localhost:27017/',function(err,client){
            if(err) throw err;
            console.log('Connected to Database');
            try {
                const db =client.db('Lensglow');
                db.collection('Contact-Form-Data').insertOne(data,(err1,res1)=>{
                    if(err1) throw err1;
                    console.log('Document Inserted');
                })
            } catch (e) {
                console.log(e);
            }
            client.close();
        })

        res.redirect('/');
        alert('Thank You for contacting us.We will get back to you, shortly.');

    });
    return router;
};