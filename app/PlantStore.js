import { observable, action } from 'mobx'
import { checkHttpResp } from './utils'

const API_HOST = process.env.API_HOST || 'https://sch-datahub.herokuapp.com';

function fetchPost(payload) {
  const fetchArgs = {
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(payload)
  };
  return fetch(API_HOST + "/api/plants/", fetchArgs)
}

class PlantStore {
  @observable plants = [];
  @observable common = '';
  @observable family = '';
  @observable symbol = '';
  @observable sci = '';
  @observable offset = 0;
  @observable pageNum = 1;
  @observable limit = 10;


  @action searchPlants({common, family, symbol, sci, limit=10, offset=0}) {

    const payload = {common, family, symbol, sci, limit, offset};

    fetchPost(payload)
      .then(checkHttpResp)
      .then((response) => response.json())
      .then(action("searching plants", (json) => {
        const {data: plants, pagination} = json;
        const {rowCount, limit} = pagination;
        const pageNum = Math.ceil(rowCount / limit);

        Object.assign(this, {
          plants,
          common,
          family,
          symbol,
          sci,
          offset,
          pageNum
        });

    }));
  }

}

export default PlantStore;
