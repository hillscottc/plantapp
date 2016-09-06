
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
