const { google } = require('googleapis');

const spreadsheet = async function (wb, ws) {
    const auth = await google.auth.getClient({
        keyFile: "client_secert.json",
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
    return data

}

module.exports = { spreadsheet }