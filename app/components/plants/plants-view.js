import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { inject, observer } from 'mobx-react';
import PlantsTable from './plants-table'
import QueryOpts from './query-opts'
import { searchPlants} from '../../plants-store'
import './plants-view.css'

@inject('routing', 'appState')
@observer
class PlantsView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadPlants({});
  }

  resetQuery = () => {
    this.loadPlants({});
  };

  loadPlants({common, family, symbol, sci, offset}) {
    searchPlants({common, family, symbol, sci, offset}).then((searchResults) => {
      const {data: plants, pagination} = searchResults;
      const {rowCount, limit} = pagination;
      const pageNum = Math.ceil(rowCount / limit);

      // Update the mobx-observed appState object.
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

  doQuery = ({common, family, symbol, sci}) => {
    this.loadPlants({common, family, symbol, sci});
  };

  handlePageClick = (e) => {
    const {common, family, symbol, sci, limit} = this.props.appState;
    const offset = Math.ceil(e.selected * limit);
    this.loadPlants({common, family, symbol, sci, offset});
  };


  resetTimerClick = () => {
    this.props.appState.resetTimer();
  };

  render() {

    const {resetQuery, doQuery, handlePageClick} = this;
    const { plants, pageNum, timer } = this.props.appState;
    const { location, push, goBack } = this.props.routing;

    return (
      <div className="PlantsView">
        <div>Current pathname: {location.pathname}</div>

        <button onClick={this.resetTimerClick}>
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
