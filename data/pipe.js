// http://stackoverflow.com/questions/23080413/nodejs-reading-csv-file

const fs = require('fs'); 
const parse = require('csv-parse');
const path = require("path");

const defaultFile = path.join(__dirname, 'plants.tiny.csv');

const dataFile = process.argv[2] || defaultFile;

const csvData=[];
fs.createReadStream(dataFile)
    .pipe(parse({delimiter: ','}))
    .on('data', (csvrow) => {
        csvData.push(csvrow);
    })
    .on('end', () => {
      console.log(csvData);
    });


