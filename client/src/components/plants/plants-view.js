import React, { Component } from 'react';
import PlantList from './plants-list';
import './plants-view.css';
import { checkHttpResp } from '../../utils.js';
import PlantModel from './plant-model';
import PlantsQueryForm from './plants-query-form'

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

  handleQuerySubmit(query) {

    console.log("Query:", query)
    // var comments = this.state.data;
    // comment.id = Date.now();
    // var newComments = comments.concat([comment]);
    // this.setState({data: newComments});
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: comment,
    //   success: function (data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function (xhr, status, err) {
    //     this.setState({data: comments});
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
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
          synonym:
        </div>
        <PlantsQueryForm onQuerySubmit={this.handleQuerySubmit} />
        <button onClick={this.handleClick}> Query Plants </button>
        <PlantList plants={plants} />
      </div>
    );
  }
}

export default PlantsView;
