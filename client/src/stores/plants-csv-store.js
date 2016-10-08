import fs from 'fs';
import path from "path";
import parse from 'csv-parse';
import PlantModel from './plant-model'
import Promise from "bluebird";

const dataFile = path.join(__dirname, '../../../data/plants.csv');


export function queryPlants(queryType,  queryVal) {
  console.log("query args:", arguments);

  let queryPromise;
  switch(queryType) {
    case "symbol":
      queryPromise = getPlantsBySymbol;
      break;
    case "family":
      queryPromise = getPlantsByFamily;
      break;
    case "common":
      queryPromise = getPlantsByCommon;
      break;
    case "":
    case undefined:
      queryPromise = getPlantsList;
      break;
    default:
      throw new Error("Query Type error");
  }
  return queryPromise(queryVal);
}


function getPlantsList() {
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


function getPlantsBySymbol(symbol) {
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


function getPlantsByCommon(common) {
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

function getPlantsByFamily(family) {
  return new Promise((resolve, reject) => {
    const plants = [];
    fs.createReadStream(dataFile)
        .pipe(parse({delimiter: ','}))
        .on('data', (csvrow) => {
          plants.push(PlantModel.fromArray(csvrow));
        })
        .on('end', () => {
          const matches = plants.filter((plant) => {
            const re = new RegExp(family, 'i');
            return plant.family.match(re);
          });
          resolve(matches);
        });
  });
}








