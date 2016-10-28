import React, { Component } from 'react'
import PlantsTable from './plants-table'
import QueryOpts from './query-opts'
import { searchPlants} from '../../stores/plants-store'
import './plants-view.css'


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.doQuery = this.doQuery.bind(this);
    this.resetQuery = this.resetQuery.bind(this);
    this.state = {plants: [], offset:0, pageNum: 1};
  }

  componentDidMount() {
    this.resetQuery();
  }

  resetQuery() {
    this.setState({queryType: '', queryVal:''});
    searchPlants({}).then((searchResults) => {
      const {data: plants, pagination} = searchResults;
      const {offset, rowCount, limit} = pagination;
      let pageNum = Math.ceil(rowCount / limit);
      this.setState({ plants, offset, pageNum});
    });
  }

  doQuery({common, family, symbol, sci}) {
    // console.log(`Querying: common:${common}, family: ${family} `);
    searchPlants({common, family, symbol, sci}).then((searchResults) => {
      const {data: plants, pagination} = searchResults;
      const {offset, rowCount, limit} = pagination;
      let pageNum = Math.ceil(rowCount / limit);
      this.setState({ plants, offset, pageNum});
    });
  }

  render() {
    const { plants } = this.state;
    const {resetQuery, doQuery} = this;

    return (
      <div className="PlantsView">
        <QueryOpts { ...{doQuery, resetQuery} } />
        <PlantsTable { ...{plants, resetQuery, doQuery} } />
      </div>
    );
  }
}

export default PlantsView;
