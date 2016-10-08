
export default class PlantModel {
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

  static fromArray(arr) {
    return new PlantModel(
        null,
        arr[0],
        arr[1],
        arr[2],
        arr[3],
        arr[4]);
  }
}