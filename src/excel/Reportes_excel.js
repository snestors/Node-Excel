const xl = require('excel4node');
const path = require('path');


// Documentacion https://github.com/natergj/excel4node/blob/master/tests/style.test.js



const reporte = function () {




    

    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Sheet 1')

    //ws.cell(1,1,1,4, true).string("Hola mundo")

    var myStyle = wb.createStyle();
    /*
myStyle.Font.Bold();
//myStyle.Font.Italics();
myStyle.Font.Family('Century Gothic');
myStyle.Font.size(14)
myStyle.Font.Color('FF0000');
//myStyle.Fill.Color('CCCCCC');
ws.Cell(1,1).string("hola Mundo").Style(myStyle);
//ws.Cell(1,2).Style(myStyle);
*/
    const pathExcel = path.join(__dirname, "excel", "test.xlsx")
    console.log(pathExcel)
    wb.write(pathExcel)

};




module.exports = {reporte}