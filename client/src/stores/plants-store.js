/**
 * Connects queries to api calls.
 */
import { checkHttpResp } from '../utils.js';
import PlantModel from '../components/plants/plant-model';


export function getPlants() {
  return fetch(`/api/plants`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

export function getPlantsBySymbol(symbol) {
  return fetch(`/api/plants/symbol/${symbol}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}