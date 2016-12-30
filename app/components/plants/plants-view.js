import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import PlantsTable from './plants-table'
import QueryOpts from './query-opts'
// import {parseQueryString} from '../../utils'
import { searchPlants} from '../../plants-store'
import './plants-view.css'

import { inject, observer } from 'mobx-react';

@inject('routing', 'appState')
@observer
class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.doQuery = this.doQuery.bind(this);
    this.resetQuery = this.resetQuery.bind(this);
    // this.handlePageClick = this.handlePageClick.bind(this);
    // this.state = { plants:[],
    //   common:'', family:'', symbol:'', sci:'', // search terms
    //   offset:0, pageNum: 1, limit: 10};
  }

  componentDidMount() {

    // This works....But is it needed?
    // const urlParams = parseQueryString(location.search);
    // if (Object.keys(urlParams).length) {
    //   console.log("Loading url args:", JSON.stringify(urlParams));
    // }
    // this.loadPlants(urlParams);

    this.loadPlants({});
  }

  resetQuery() {
    this.loadPlants({});
  }

  loadPlants({common, family, symbol, sci, offset}) {
    searchPlants({common, family, symbol, sci, offset}).then((searchResults) => {
      const {data: plants, pagination} = searchResults;
      const {rowCount, limit} = pagination;
      const pageNum = Math.ceil(rowCount / limit);

      // old
      // this.setState({ plants, common, family, symbol, sci, offset, pageNum});

      // Mobx. Update the observed appState.
      Object.assign(this.props.appState, {
          plants,
          common,
          family,
          symbol,
          sci,
          offset,
          pageNum
        });


    });
  }


  doQuery({common, family, symbol, sci}) {
    this.loadPlants({common, family, symbol, sci});
  }

  // Defining in this way means no explicit bind
  handlePageClick = (e) => {

    // old
    // const {common, family, symbol, sci, limit} = this.state;

    // mobx
    const {common, family, symbol, sci, limit} = this.props.appState;

    const offset = Math.ceil(e.selected * limit);
    this.loadPlants({common, family, symbol, sci, offset});
  };


  onReset = () => {
    this.props.appState.resetTimer();
  };

  render() {

    const {resetQuery, doQuery, handlePageClick} = this;

    // old
    // const { plants, pageNum } = this.state;

    // mobx.
    const { plants, pageNum, timer } = this.props.appState;


    const { location, push, goBack } = this.props.routing;


    return (
      <div className="PlantsView">
        <div>Current pathname: {location.pathname}</div>

        <button onClick={this.onReset}>
          Seconds passed: {timer}
        </button>



        <QueryOpts { ...{doQuery, resetQuery} } />
        <PlantsTable { ...{plants, doQuery} } />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={pageNum}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
}

export default PlantsView;
