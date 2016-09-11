import React, { Component } from 'react';
import PlantsTable from './plants-table';
import QuerySelect from './query-select'
import {queryPlants} from '../../stores/plants-store'
import './plants-view.css';
import { Button } from 'react-bootstrap';


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryTextChange = this.handleQueryTextChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleTextClick = this.handleTextClick.bind(this);
    this.state = {plants: [], queryType: '', queryVal:''};
  }

  handleClick() {
    queryPlants().then((plants) => {
      this.setState({plants:plants});
    });
  }

  handleQueryChange(val) {
    this.setState({queryType: val ? val.value : ""});
  }

  handleQueryTextChange(e) {
    this.setState({ queryVal: e.target.value });
  }

  handleQueryClick() {
    const {queryType, queryVal} = this.state;
    queryPlants(queryType, queryVal ).then((plants) => {
      this.setState({plants:plants});
    });
  }

  handleTextClick(val) {

    console.log("text click val is", val);

    queryPlants().then((plants) => {
      this.setState({plants:plants});
    });
  }


  render() {
    const { plants, queryType, queryVal } = this.state;
    return (
      <div className="PlantsView">
        <h2>Plants &nbsp;&nbsp;
          <Button
              bsStyle="primary"
              bsSize="small"
              onClick={this.handleClick}>
            Get some plants
          </Button>
        </h2>

        <QuerySelect queryType={queryType}
                     queryVal={queryVal}
                     handleQueryChange={this.handleQueryChange}
                     handleQueryTextChange={this.handleQueryTextChange}
                     handleQueryClick={this.handleQueryClick} />
        <PlantsTable plants={plants} textClick={this.handleTextClick} />
      </div>
    );
  }
}

export default PlantsView;
