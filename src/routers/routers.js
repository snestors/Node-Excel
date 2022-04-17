const express = require('express');
const router = express.Router();
const { registroGeneral } = require('../googleapis/sheets')


router.get('/', async (req, res) => {
    const data = await registroGeneral()
    const dataFilter = data.filter((e)=> e["MARCA"]==="NISSAN")
    res.send(dataFilter)
});

module.exports = router;

