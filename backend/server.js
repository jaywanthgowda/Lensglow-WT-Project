const express = require('express');
const path = require('path');
const staticFileHandling = require('./static_file_handling');

const routes = require('./route-handler');

const app = express();
const port = 5000 ;

//app.use(express.static(path.join(__dirname,'./')));
app.use(staticFileHandling())

app.use('/',routes())

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server running at http://localhost:${port}/`);
})
