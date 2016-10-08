import fs from 'fs';
import path from "path";
import parse from 'csv-parse';
import PlantModel from './plant-model'
import Promise from "bluebird";

const dataFile = path.join(__dirname, '../../../data/plants.csv');

export function getPlantsList() {
  return new Promise((resolve, reject) => {
    const plants = [];
    fs.createReadStream(dataFile)
        .pipe(parse({delimiter: ','}))
        .on('data', (csvrow) => {
          plants.push(PlantModel.fromArray(csvrow));
        })
        .on('end', () => {
          resolve(plants);
        });
  });
}


export function getPlantsBySymbol(symbol, callback) {
  return new Promise((resolve, reject) => {
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
          resolve(matches);
        });
  });
}


export function getPlantsByCommon(common, callback) {
  return new Promise((resolve, reject) => {
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
          resolve(matches);
        });
  });
}








