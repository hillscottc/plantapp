import { checkHttpResp } from '../utils.js';
import PlantModel from './plant-model'

export function queryPlants({queryType, queryVal, max}) {
  // console.log(`Querying: ${queryType}, ${queryVal}, ${max}`);
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
  return queryPromise({queryType, queryVal, max});
}

function getPlantsList({max=1000}) {
  return fetch(`/api/plants/${max}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

function getPlantsBySymbol({queryVal}) {
  return fetch(`/api/plants/symbol/${queryVal}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

function getPlantsByFamily({queryVal}) {
  return fetch(`/api/plants/family/${queryVal}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

function getPlantsByCommon({queryVal}) {
  return fetch(`/api/plants/common-name/${queryVal}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}