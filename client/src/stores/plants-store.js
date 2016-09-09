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

  toJS() {
    return {
      "_id": this.id,
      "Symbol": this.symbol,
      "Synonym Symbol": this.synonym,
      "Scientific Name with Author": this.sci_name,
      "Common Name": this.common_name,
      "Family": this.family,
    };
  }

  static fromJS(object) {
    return new PlantModel(
        object["_id"],
        object["Symbol"],
        object["Synonym Symbol"],
        object["Scientific Name with Author"],
        object["Common Name"],
        object["Family"]);
  }
}

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

export function getPlantsByFamily(family) {
  return fetch(`/api/plants/family/${family}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}

export function getPlantsByCommon(common) {
  return fetch(`/api/plants/common-name/${common}`, {accept: 'application/json',})
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}