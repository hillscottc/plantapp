import { checkHttpResp } from '../utils.js';
import PlantModel from './plant-model'

export function queryPlants({queryType, queryVal}) {
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
  return queryPromise({queryType, queryVal});
}




// WHY NO SEND PAYLOAD?
export function searchPlants({common, family}) {



  console.log(`Searching: common:${common}, family: ${family} `);
  // const payload = JSON.stringify({common, family});
  const payload = JSON.stringify({foo:1, bar:2});
  return fetch(`/api/plants/`, {accept: 'application/json', method: 'post', body: payload})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });





}

function getPlantsList() {
  return fetch(`/api/plants/`, {accept: 'application/json',})
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