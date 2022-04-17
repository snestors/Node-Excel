const express = require('express');
const {google}= require('googleapis');
const router  = require('./src/routers/routers')

const app = express();
app.use(express.json())
app.use(router)




app.listen(3000, ()=> console.log("Server up 3000 port"))
