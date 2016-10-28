import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import PlantsTable from './plants-table'
import QueryOpts from './query-opts'
import { searchPlants} from '../../stores/plants-store'
import './plants-view.css'

const PAGE_LIMIT = 10;

class PlantsView extends Component {

  constructor(props) {
    super(props);
    this.doQuery = this.doQuery.bind(this);
    this.resetQuery = this.resetQuery.bind(this);
    this.state = {plants: [], offset:0, pageNum: 1};
  }

  componentDidMount() {
    this.loadPlants({});
  }

  resetQuery() {
    this.loadPlants({});
  }

  loadPlants({common, family, symbol, sci}) {
    searchPlants({common, family, symbol, sci}).then((searchResults) => {
      const {data: plants, pagination} = searchResults;
      const {offset, rowCount, limit} = pagination;
      let pageNum = Math.ceil(rowCount / limit);
      this.setState({ plants, offset, pageNum});
    });
  }


  doQuery({common, family, symbol, sci}) {
    this.loadPlants({common, family, symbol, sci});
  }

  handlePageClick(e)  {
    let offset = Math.ceil(e.selected * PAGE_LIMIT);
    this.setState({offset: offset}, () => {
      this.loadPlants({offset});
    });

  }

  render() {
    const { plants, pageNum } = this.state;
    const {resetQuery, doQuery} = this;

    return (
      <div className="PlantsView">
        <QueryOpts { ...{doQuery, resetQuery} } />
        <PlantsTable { ...{plants, resetQuery, doQuery} } />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={pageNum}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={doQuery}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
}

export default PlantsView;
