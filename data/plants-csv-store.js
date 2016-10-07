const fs = require('fs');
const path = require("path");
const parse = require('csv-parse');

const dataFile = path.join(__dirname, 'plants.tiny.csv');


function getAll(callback) {
  const csvData=[];
  fs.createReadStream(dataFile)
      .pipe(parse({delimiter: ','}))
      .on('data', (csvrow) => {
        csvData.push(csvrow);
      })
      .on('end', () => {
        callback(csvData);
      });
}

function getBySymbol(symbol, callback) {
  const csvData=[];
  fs.createReadStream(dataFile)
      .pipe(parse({delimiter: ','}))
      .on('data', (csvrow) => {
        csvData.push(csvrow);
      })
      .on('end', () => {
        const matches = csvData.filter((val) => {
          return val[0] === symbol;
        });
        callback(matches);
      });
}


module.exports = {
  getBySymbol: getBySymbol,
  getAll: getAll
};