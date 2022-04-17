
const { google } = require('googleapis');
const {spreadsheet} = require('./spreadsheet')
const _ = require('underscore')


const DATA_AUTOS = "1Tpui79bHcuKUYPu_n7hdNQSUdphCjtmHTKW1_BCHelw"
const DAÑOS = "1KuTCrwVV-wPlXQJyysgGmbSbTPVAXvJwp-CJy83LA9g"

const registroGeneral = async function (idNave) {
   const registroGeneral = await spreadsheet(DATA_AUTOS, "REGISTRO_GENEREAL", true) 
   filter = registroGeneral.filter((e)=>e.SERVICIO === idNave)
   
   return filter
}

const fotosProsentacion = async function (arrVin) {

   const fotosPresentacion = await spreadsheet(DATA_AUTOS, "FOTOS_PRESENTACION", true) 
   console.log(arrVin)
   filter = fotosPresentacion.filter((e)=> arrVin.includes(e.VIN) )
   
   return filter
}

const Daños = async function (arrVin) {

   const daños = await spreadsheet(DAÑOS, "DAÑOS", true) 
   //console.log(arrVin)
   filter = daños.filter((e)=> arrVin.includes(e.VIN) )
   
   return filter
}





module.exports = { registroGeneral, fotosProsentacion,Daños }