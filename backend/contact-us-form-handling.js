const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')

const app = express();
const port = 5000 ;


app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
    
app.post('/add',(req,res)=>{

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
        res.redirect('')
    })
});


app.listen(port,()=>{
    console.log(`Server Listening on port ${port}`);
})



