
const { google } = require('googleapis');
const {spreadsheet} = require('./spreadsheet')
const _ = require('underscore')


const DATA_AUTOS = "1Tpui79bHcuKUYPu_n7hdNQSUdphCjtmHTKW1_BCHelw"

const registroGeneral = async function () {
   const registroGeneral = await spreadsheet(DATA_AUTOS, "REGISTRO_GENEREAL") 
   const headers = registroGeneral.shift()
   //console.log(headers)
  const parseJson = _.map(registroGeneral, (e)=> _.object(headers, e))
   return parseJson
}



module.exports = { registroGeneral }