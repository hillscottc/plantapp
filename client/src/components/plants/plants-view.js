import React, { Component } from 'react';
import PlantsTable from './plants-table';
import './plants-view.css';
import { checkHttpResp } from '../../utils.js';
import PlantModel from './plant-model';
import SymbolQueryForm from './symbol-query-form'

class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.state = {plants: []};
  }

  getPlants() {
    return fetch(`/api/plants`, {accept: 'application/json',})
        .then(checkHttpResp)
        .then((response) => response.json())
        .then((json) => {
          return json.map(item => PlantModel.fromJS(item));
        });
  }

  getPlantsBySymbol(symbol) {
    return fetch(`/api/plants/symbol/${symbol}`, {accept: 'application/json',})
        .then(checkHttpResp)
        .then((response) => response.json())
        .then((json) => {
          return json.map(item => PlantModel.fromJS(item));
        });
  }

  handleQuerySubmit(query) {
    console.log("Query:", query);
    const { symbol } = query;
    if (symbol) {
      this.getPlantsBySymbol(symbol).then((plants) => {
        console.log(JSON.stringify(plants));
        this.setState({plants:plants});
      });
    }
  }

  handleClick() {
    this.getPlants().then((plants) => {
      console.log(JSON.stringify(plants));
      this.setState({plants:plants});
    });
  }

  render() {
    const { plants } = this.state;
    return (
      <div className="PlantsView">
        <h2>Plants</h2>
        <div>
          <label>Some plants</label>
          <button onClick={this.handleClick}> Go </button>
        </div>
        <SymbolQueryForm onQuerySubmit={this.handleQuerySubmit} />
        <PlantsTable plants={plants} />
      </div>
    );
  }
}

export default PlantsView;
