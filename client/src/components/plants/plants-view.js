import React, { Component } from 'react'
import PlantsTable from './plants-table'
import QuerySelect from './query-select'
import QueryMax from './query-max'
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
    this.selectMax = this.selectMax.bind(this);
    this.state = {plants: [], queryType: '', queryVal:'', maxVal: 100};
  }

  componentDidMount() {
    this.resetQuery();
  }

  /**
   * init the plants table
   */
  resetQuery() {
    queryPlants({max:100}).then((plants) => {
      this.setState({plants:plants});
    });
  }

  selectQuery(val) {
    this.setState({queryType: val ? val.value : ""});
  }

  changeQueryVal(e) {
    this.setState({ queryVal: e.target.value });
  }

  /**
   * max plants to show
   */

  selectMax(val) {
    this.setState({maxVal: val ? val.value : 100});
  }

  /**
   * query go button
   */
  clickQuery() {
    const {queryType, queryVal} = this.state;
    queryPlants({queryType, queryVal}).then((plants) => {
      this.setState({plants:plants});
    });
  }

  doQuery(queryType, queryVal) {
    queryPlants({queryType, queryVal}).then((plants) => {
      this.setState({plants:plants});
    });
  }

  render() {
    const { plants, queryType, queryVal, maxVal } = this.state;
    const {selectQuery, changeQueryVal,  clickQuery,
        resetQuery, doQuery, selectMax} = this;

    return (
      <div className="PlantsView">
        <QuerySelect { ...{queryType, queryVal, selectQuery, changeQueryVal, clickQuery} } />
        <QueryMax { ...{selectMax, maxVal} } />
        <div>Common:
          <input type="text" onChange={(e) => doQuery('common', e.target.value)} />
        </div>
        <PlantsTable { ...{plants, resetQuery, doQuery} } />
      </div>
    );
  }
}

export default PlantsView;
