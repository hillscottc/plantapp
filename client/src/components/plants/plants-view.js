import React, { Component } from 'react';
import PlantsTable from './plants-table';
import './plants-view.css';
import QueryForm from './query-form'
import QuerySelect from './query-select'
import * as store from '../../stores/plants-store'


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.state = {plants: [], selectValue: ''};
  }

  handleQuerySubmit(query, queryType) {
    console.log("Query:", query);
    const { queryVal } = query;

    switch(queryType) {
      case "symbol":
        store.getPlantsBySymbol(queryVal).then((plants) => {
          this.setState({plants:plants});
        });
        break;
      case "family":
        store.getPlantsByFamily(queryVal).then((plants) => {
          this.setState({plants:plants});
        });
        break;
      case "common":
        store.getPlantsByCommon(queryVal).then((plants) => {
          this.setState({plants:plants});
        });
        break;
      default:
        throw new Error("Query Type error");
    }

  }

  handleChangeQuery(val) {
    this.setState({selectValue: val ? val.value : ""});
  }

  handleClick() {

    console.log("For no reason, selectValue is ", this.state.selectValue);

    store.getPlants().then((plants) => {
      this.setState({plants: plants});
    });
  }

  render() {
    const { plants, selectValue } = this.state;
    const queryOptions = [
        {value: 'common', label: 'Common'},
        {value: 'symbol', label: 'Symbol'},
        {value: 'family', label: 'Family'}
    ];
    return (
      <div className="PlantsView">
        <h2>Plants</h2>
        <div>
          <label>Some plants</label>
          <button onClick={this.handleClick}> Go </button>
        </div>
        <QuerySelect queryOptions={queryOptions}
                     selectValue={selectValue}
                     handleChangeQuery={this.handleChangeQuery}/>
        <QueryForm onQuerySubmit={this.handleQuerySubmit}
                   queryType="family"/>
        <QueryForm onQuerySubmit={this.handleQuerySubmit}
                   queryType="symbol"/>
        <QueryForm onQuerySubmit={this.handleQuerySubmit}
                   queryType="common"/>
        <PlantsTable plants={plants} />
      </div>
    );
  }
}

export default PlantsView;
