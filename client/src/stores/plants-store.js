import { checkHttpResp } from '../utils.js';


class PlantModel {
  id;
  symbol;
  synonym;
  sci_name;
  common_name;
  family;

  constructor(id, symbol, synonym, sci_name, common_name, family) {
    this.id = id;
    this.symbol = symbol;
    this.synonym = synonym;
    this.sci_name = sci_name;
    this.common_name = common_name;
    this.family = family;
  }

  static fromJS(object) {
    return new PlantModel(
        object["id"],
        object["symbol"],
        object["synonym"],
        object["sci_name"],
        object["common_name"],
        object["family"]);
  }
}


export function queryPlants(queryType,  queryVal) {
  console.log("args:", arguments);

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


export function getPlantsList() {
  return fetch(`/api/plants`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

function getPlantsBySymbol(symbol) {
  return fetch(`/api/plants/symbol/${symbol}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

function getPlantsByFamily(family) {
  return fetch(`/api/plants/family/${family}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

function getPlantsByCommon(common) {
  return fetch(`/api/plants/common-name/${common}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}