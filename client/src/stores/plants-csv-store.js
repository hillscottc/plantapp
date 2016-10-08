const fs = require('fs');
const path = require("path");
const parse = require('csv-parse');
import PlantModel from './plant-model'

const dataFile = path.join(__dirname, '../../../data/plants.csv');


export function getPlantsList(callback) {
  const plants = [];
  fs.createReadStream(dataFile)
      .pipe(parse({delimiter: ','}))
      .on('data', (csvrow) => {
        plants.push(PlantModel.fromArray(csvrow));
      })
      .on('end', () => {
        callback(plants);
      });
}

export function getPlantsBySymbol(symbol, callback) {
  const plants = [];
  fs.createReadStream(dataFile)
      .pipe(parse({delimiter: ','}))
      .on('data', (csvrow) => {
        plants.push(PlantModel.fromArray(csvrow));
      })
      .on('end', () => {
        const matches = plants.filter((plant) => {
          return plant.symbol === symbol;
        });
        callback(matches);
      });
}


export function getPlantsByCommon(common, callback) {
  const plants = [];
  fs.createReadStream(dataFile)
      .pipe(parse({delimiter: ','}))
      .on('data', (csvrow) => {
        plants.push(PlantModel.fromArray(csvrow));
      })
      .on('end', () => {
        const matches = plants.filter((plant) => {
          const re = new RegExp(common, 'i');
          return plant.common_name.match(re);
        });
        callback(matches);
      });
}


