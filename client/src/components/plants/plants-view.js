import React, { Component } from 'react';
import PlantList from './plants-list';
import './plants-view.css';
import { checkHttpResp } from '../../utils.js';
import PlantModel from '../../models/plant-model';


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {plants: []};
  }

  getPlants(query) {
    return fetch(`/api/plants`, {accept: 'application/json',})
        .then(checkHttpResp)
        .then((response) => response.json())
        .then((json) => {
          return json.map(item => PlantModel.fromJS(item));
        });
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
        <PlantList plants={plants} />
        <button onClick={this.handleClick}>
          Query Plants
        </button>
      </div>
    );
  }
}

export default PlantsView;
