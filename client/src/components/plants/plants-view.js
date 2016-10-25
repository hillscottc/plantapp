import React, { Component } from 'react'
import PlantsTable from './plants-table'
import QuerySelect from './query-select'
import {queryPlants, searchPlants} from '../../stores/plants-store'
import './plants-view.css'


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.selectQuery = this.selectQuery.bind(this);
    this.changeQueryVal = this.changeQueryVal.bind(this);
    this.doQuery = this.doQuery.bind(this);
    this.resetQuery = this.resetQuery.bind(this);
    this.changeCommonVal = this.changeCommonVal.bind(this);
    this.changeFamilyVal = this.changeFamilyVal.bind(this);
    this.doComplexQuery = this.doComplexQuery.bind(this);
    this.state = {plants: [], queryType: '', queryVal:'', familyVal:'', commonVal:''};
  }

  componentDidMount() {
    this.resetQuery();
  }

  /**
   * init the plants table
   */
  resetQuery() {
    this.setState({queryType: '', queryVal:''});
    queryPlants({}).then((plants) => {
      this.setState({plants});
    });
  }

  selectQuery(e) {
    this.setState({ queryVal:''});
    const queryType = e ? e.value : '';
    this.setState({queryType});
    if (! queryType) {
      this.resetQuery();
    }
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

  doQuery(queryType, queryVal) {
    queryPlants({queryType, queryVal}).then((plants) => {
      this.setState({plants});
    });
  }


  doComplexQuery({common, family}) {
    console.log(`Querying: common:${common}, family: ${family} `);
    searchPlants({common, family}).then((plants) => {
      this.setState({plants});
    });
  }

  changeCommonVal(e) {
    const commonVal = e.target.value;
    this.setState({commonVal});
    this.doComplexQuery({family:this.state.familyVal, common: commonVal});
  }

  changeFamilyVal(e) {
    const familyVal = e.target.value;
    this.setState({familyVal});
    this.doComplexQuery({family:familyVal, common: this.state.commonVal});
  }


  render() {
    const { plants, queryType, queryVal, familyVal, commonVal } = this.state;
    const {selectQuery, changeQueryVal, resetQuery, doQuery, changeCommonVal, changeFamilyVal} = this;

    return (
      <div className="PlantsView">
        <QuerySelect { ...{queryType, queryVal, selectQuery, changeQueryVal} } />
        <div>
          family
          <input type="text" value={familyVal} onChange={changeFamilyVal} />
          <br/>
          common
          <input type="text" value={commonVal} onChange={changeCommonVal} />
        </div>
        <PlantsTable { ...{plants, resetQuery, doQuery} } />
      </div>
    );
  }
}

export default PlantsView;
