import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import PlantsTable from './plants-table'
import QueryOpts from './query-opts_MOBX'
import './plants-view.css'

@inject('routing', 'plantStore')
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

  @action
  loadPlants({common, family, symbol, sci, offset}) {

    this.props.plantStore.searchPlants({common, family, symbol, sci, offset});

  }

  doQuery = ({common, family, symbol, sci}) => {
    this.loadPlants({common, family, symbol, sci});
  };

  handlePageClick = (e) => {
    const {common, family, symbol, sci, limit} = this.props.plantStore;
    const offset = Math.ceil(e.selected * limit);
    this.loadPlants({common, family, symbol, sci, offset});
  };


  @action
  resetTimerClick = () => {
    this.props.plantStore.resetTimer();
  };

  render() {

    const {resetQuery, doQuery, handlePageClick} = this;
    const { plants, pageNum, timer } = this.props.plantStore;
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
