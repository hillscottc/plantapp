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
    this.handleColumnClick = this.handleColumnClick.bind(this);
    this.state = {plants: [], queryType: '', queryVal:''};
  }

  componentDidMount() {
    queryPlants().then((plants) => {
      this.setState({plants:plants});
    });
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

  handleColumnClick(queryType, e) {
    queryPlants(queryType, e.target.textContent).then((plants) => {
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
        <PlantsTable plants={plants}
                     columnClick={this.handleColumnClick} />
      </div>
    );
  }
}

export default PlantsView;
