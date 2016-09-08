import React, { PropTypes }  from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const QuerySelect = ({queryOptions, selectValue, handleChangeQuery}) => (
  <div>
    <Select
        name="stateSelect"
        value={selectValue}
        options={queryOptions}
        onChange={handleChangeQuery}
        className="select"
    />
  </div>
);


QuerySelect.propTypes = {
  queryOptions: PropTypes.array.isRequired,
  selectValue: PropTypes.string.isRequired,
  handleChangeQuery: PropTypes.func.isRequired
};

export default QuerySelect;
