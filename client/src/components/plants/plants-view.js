import React, { Component } from 'react';
import PlantsTable from './plants-table';
import './plants-view.css';
import QueryForm from './query-form'
import {getPlants, getPlantsBySymbol, getPlantsByFamily} from '../../stores/plants-store'


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.state = {plants: []};
  }

  handleQuerySubmit(query, queryType) {
    console.log("Query:", query);
    const { queryVal } = query;

    switch(queryType) {
      case "symbol":
        getPlantsBySymbol(queryVal).then((plants) => {
          this.setState({plants:plants});
        });
        break;
      case "family":
        getPlantsByFamily(queryVal).then((plants) => {
          this.setState({plants:plants});
        });
        break;
      default:
        throw new Error("Query Type error");
    }

  }

  handleClick() {
    getPlants().then((plants) => {
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
        <QueryForm onQuerySubmit={this.handleQuerySubmit}
                   queryType="family"/>
        <QueryForm onQuerySubmit={this.handleQuerySubmit}
                   queryType="symbol"/>
        <PlantsTable plants={plants} />
      </div>
    );
  }
}

export default PlantsView;
