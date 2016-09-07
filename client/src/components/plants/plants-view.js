import React, { Component } from 'react';
import PlantsTable from './plants-table';
import './plants-view.css';
import SymbolQueryForm from './symbol-query-form'
import {getPlants, getPlantsBySymbol} from '../../stores/plants-store'


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.state = {plants: []};
  }

  handleQuerySubmit(query) {
    console.log("Query:", query);
    const { symbol } = query;
    if (symbol) {
      getPlantsBySymbol(symbol).then((plants) => {
        console.log("Plants returned:", plants.length);
        this.setState({plants:plants});
      });
    }
  }

  handleClick() {
    getPlants().then((plants) => {
      console.log("Plants returned:", plants.length);
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
