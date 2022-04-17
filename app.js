const express = require('express');
const {google}= require('googleapis');
const {registroGeneral } = require('./src/googleapis/sheets')


const app = express();
app.use(express.json())





// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function(req, res) {
    
  const data = await registroGeneral()      
 
  
  res.send(data);
  
});





app.listen(3000, ()=> console.log("Server up 3000 port"))
