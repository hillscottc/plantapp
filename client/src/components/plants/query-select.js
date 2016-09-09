import React, { PropTypes }  from 'react'
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import './query-select.css';


const QuerySelect = ({
    queryOptions,
    selectValue,
    handleQueryChange,
    handleQueryTextChange,
    queryVal,
    handleQueryClick}) => (
  <div className="selectDiv">
    <label className="label label-default">query by</label>
    <Select
        name="stateSelect"
        value={selectValue}
        options={queryOptions}
        onChange={handleQueryChange}
        className="select"
    />
    <input
        type="text"
        value={queryVal}
        onChange={handleQueryTextChange}
    />
    <Button
        bsStyle="primary"
        bsSize="small"
        onClick={handleQueryClick}>
      Go
    </Button>
  </div>
);


QuerySelect.propTypes = {
  queryOptions: PropTypes.array.isRequired,
  selectValue: PropTypes.string.isRequired,
  handleQueryChange: PropTypes.func.isRequired,
  handleQueryTextChange: PropTypes.func.isRequired,
  queryVal: PropTypes.string.isRequired,
  handleQueryClick: PropTypes.func.isRequired
};

export default QuerySelect;
