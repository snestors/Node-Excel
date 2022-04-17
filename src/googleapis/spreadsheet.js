const { google } = require('googleapis');
const _ = require('underscore')

const spreadsheet = async function (wb, ws, json) {
    const auth = await google.auth.getClient({
        keyFile: "client_secret.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

    // instance of google Sheets API
    const googleSheet = google.sheets({ version: "v4", auth });

    const wsheet = await googleSheet.spreadsheets.values.get({
        auth,
        spreadsheetId: wb,
        range: ws
    })

    data = wsheet.data.values

    if(json) {
        const headers = data.shift()
        const newData = _.map(data, (e)=> _.object(headers, e))
        return newData
    
    } else {
        //console.log(data)
        
        return data
    }
    

    

}

module.exports = { spreadsheet }