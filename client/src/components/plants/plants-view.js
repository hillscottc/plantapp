import React, { Component } from 'react';
import PlantsTable from './plants-table';
import QuerySelect from './query-select'
import {queryPlants} from '../../stores/plants-store'
import './plants-view.css';


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryTextChange = this.handleQueryTextChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.columnClick = this.columnClick.bind(this);
    this.resetQuery = this.resetQuery.bind(this);
    this.state = {plants: [], queryType: '', queryVal:''};
  }

  componentDidMount() {
    this.resetQuery();
  }

  /**
   * init the plants table
   */
  resetQuery() {
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

  /**
   * query go button
   */
  handleQueryClick() {
    const {queryType, queryVal} = this.state;
    queryPlants(queryType, queryVal ).then((plants) => {
      this.setState({plants:plants});
    });
  }

  /**
   * links in the table
   */
  columnClick(queryType, val) {

    queryPlants(queryType, val).then((plants) => {
      this.setState({plants:plants});
    });
  }

  render() {
    const { plants, queryType, queryVal } = this.state;
    const {handleQueryChange, handleQueryTextChange,  handleQueryClick, resetQuery, columnClick} = this;
    return (
      <div className="PlantsView">
        <QuerySelect { ...{queryType, queryVal, handleQueryChange, handleQueryTextChange, handleQueryClick} }
        />
        <PlantsTable { ...{plants, resetQuery, columnClick} } />
      </div>
    );
  }
}

export default PlantsView;
