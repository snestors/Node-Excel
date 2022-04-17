
const { google } = require('googleapis');
const {spreadsheet} = require('./spreadsheet')
const _ = require('underscore')


const DATA_AUTOS = "1Tpui79bHcuKUYPu_n7hdNQSUdphCjtmHTKW1_BCHelw"

const registroGeneral = async function () {
   const registroGeneral = await spreadsheet(DATA_AUTOS, "REGISTRO_GENEREAL", true) 
   
   return registroGeneral
}

const fotosProsentacion = async function () {
   const registroGeneral = await spreadsheet(DATA_AUTOS, "FOTOS_PRESENTACION", true) 
   
   return registroGeneral
}





module.exports = { registroGeneral }