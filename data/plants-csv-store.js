const fs = require('fs');
const path = require("path");
const parse = require('csv-parse');

const dataFile = path.join(__dirname, 'plants.csv');


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

        // const plants = matches.map((val)=> {return  })

        callback(matches);
      });
}


function getLikeCommon(common, callback) {
  const csvData=[];
  fs.createReadStream(dataFile)
      .pipe(parse({delimiter: ','}))
      .on('data', (csvrow) => {
        csvData.push(csvrow);
      })
      .on('end', () => {
        const matches = csvData.filter((val) => {
          const re = new RegExp(common, 'i');
          return val[3].match(re);
        });
        callback(matches);
      });
}


module.exports = {
  getBySymbol: getBySymbol,
  getAll: getAll,
  getLikeCommon: getLikeCommon
};