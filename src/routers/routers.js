const express = require('express');
const router = express.Router();
const {reporte} = require('../excel/Reportes_excel')
const { registroGeneral, fotosProsentacion, Daños } = require('../googleapis/sheets')


router.get('/', async (req, res) => {

    //const dataRegistroGeneral = await registroGeneral("S1633")
    //const arrVin = dataRegistroGeneral.map((e)=>e.VIN)
   // const dataFotosPresentacion = await fotosProsentacion(arrVin)
   // const dataDaños = await Daños(arrVin)
   reporte()
    //console.log()

    res.send("dataDaños")
});

module.exports = router;

