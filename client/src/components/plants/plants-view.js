import React, { Component } from 'react'
import PlantsTable from './plants-table'
import QuerySelect from './query-select'
import {queryPlants} from '../../stores/plants-store'
import './plants-view.css'


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.selectQuery = this.selectQuery.bind(this);
    this.changeQueryVal = this.changeQueryVal.bind(this);
    this.clickQuery = this.clickQuery.bind(this);
    this.doQuery = this.doQuery.bind(this);
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
    queryPlants({max:100}).then((plants) => {
      this.setState({plants});
    });
  }

  selectQuery(val) {
    this.setState({queryType: val ? val.value : ""});
  }

  changeQueryVal(e) {
    const queryType = this.state.queryType;
    const queryVal = e.target.value;

    this.setState({queryVal});


    if (queryType && queryVal ) {
      queryPlants({queryType, queryVal}).then((plants) => {
        this.setState({plants});
      });
    }


  }

  /**
   * query go button
   */
  clickQuery() {
    const {queryType, queryVal} = this.state;
    queryPlants({queryType, queryVal}).then((plants) => {
      this.setState({plants});
    });
  }

  doQuery(queryType, queryVal) {
    queryPlants({queryType, queryVal}).then((plants) => {
      this.setState({plants});
    });
  }

  render() {
    const { plants, queryType, queryVal } = this.state;
    const {selectQuery, changeQueryVal, clickQuery, resetQuery, doQuery} = this;

    return (
      <div className="PlantsView">
        <QuerySelect { ...{queryType, queryVal, selectQuery, changeQueryVal, clickQuery} } />
        <PlantsTable { ...{plants, resetQuery, doQuery} } />
      </div>
    );
  }
}

export default PlantsView;
