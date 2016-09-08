import React, { PropTypes }  from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './query-select.css';


const QuerySelect = ({queryOptions,
    selectValue,
    handleQueryChange,
    handleQueryTextChange,
    queryVal,
    handleQueryClick}) => (
  <div className="selectDiv">
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
    <button onClick={handleQueryClick}> Go </button>
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
