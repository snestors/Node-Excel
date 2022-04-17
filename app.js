const express = require('express');
const {google}= require('googleapis');
const {getDATA_AUTO, getFOTOS_PRESENTACION} = require('./src/googleapis/sheets')


const app = express();





// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function(req, res) {

  //console.log(await getFOTOS_PRESENTACION())
    
  const data = await getFOTOS_PRESENTACION()

  
  const dataFilter = await data.filter((e)=>
   // console.log(e[2])
    e[2] == "PDI"
  )
   
    
  res.send(dataFilter);
  
});





app.listen(3000, ()=> console.log("Server up 3000 port"))
