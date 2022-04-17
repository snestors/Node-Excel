


const { google } = require('googleapis');






const getDATA_AUTO = async function () {
    const auth = await google.auth.getClient({
        keyFile: "client_secert.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

// instance of google Sheets API
const googleSheet = google.sheets({ version: "v4", auth });
    // Sheet DATA_AUTOS
    const spreadsheetId = "1Tpui79bHcuKUYPu_n7hdNQSUdphCjtmHTKW1_BCHelw"
    //Get metada about spreadsheet

    const getRegistroGeneral = await googleSheet.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "REGISTRO_GENEREAL"
    })

    const data = await getRegistroGeneral.data.values

    console.log(data.shift())

    return data

}


const getFOTOS_PRESENTACION = async function () {
    const auth = await google.auth.getClient({
        keyFile: "client_secert.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

// instance of google Sheets API
const googleSheet = google.sheets({ version: "v4", auth });

    // Sheet DATA_AUTOS
    
    const spreadsheetId = "1Tpui79bHcuKUYPu_n7hdNQSUdphCjtmHTKW1_BCHelw"
    //Get metada about spreadsheet

    const getRegistroGeneral = await googleSheet.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "FOTOS_PRESENTACION"
    })

    const data = getRegistroGeneral.data.values

    //console.log(data.shift())

    return data

}


module.exports = { getDATA_AUTO, getFOTOS_PRESENTACION }