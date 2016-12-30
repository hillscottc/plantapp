import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import PlantsTable from './plants-table'
import QueryOpts from './query-opts'
import { searchPlants} from '../../plants-store'
import './plants-view.css'


class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.state = { plants:[],
      common:'', family:'', symbol:'', sci:'', // search terms
      offset:0, pageNum: 1, limit: 10};
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
      this.setState({ plants, common, family, symbol, sci, offset, pageNum});
    });
  }


  doQuery = ({common, family, symbol, sci}) => {
    this.loadPlants({common, family, symbol, sci});
  };

  handlePageClick = (e) => {
    const {common, family, symbol, sci, limit} = this.state;
    const offset = Math.ceil(e.selected * limit);
    this.loadPlants({common, family, symbol, sci, offset});
  };

  render() {
    const { plants, pageNum } = this.state;
    const {resetQuery, doQuery, handlePageClick} = this;

    return (
      <div className="PlantsView">
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
