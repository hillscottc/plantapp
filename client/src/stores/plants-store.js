import { checkHttpResp } from '../utils.js';
import PlantModel from './plant-model'


export function searchPlants({common, family, symbol, sci, limit=10, offset=0}) {
  const payload = {common, family, symbol, sci, limit, offset};
  return fetch("/api/plants/", {
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify(payload)
      })
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        const {data, pagination} = json;
        return {
          data: data.map(item => PlantModel.fromJS(item)),
          pagination
        };
      });
}
