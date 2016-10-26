import { checkHttpResp } from '../utils.js';
import PlantModel from './plant-model'


export function searchPlants({common, family, symbol, sci}) {
  const payload = {common, family, symbol, sci};
  return fetch("/api/plants/", {
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify(payload)
      })
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        return json.map(item => PlantModel.fromJS(item));
      });
}
