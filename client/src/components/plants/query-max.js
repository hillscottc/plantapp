// UNUSED


import React, { PropTypes }  from 'react'
import Select from 'react-select';

const queryOptions = [
  {value: 100, label: '100'},
  {value: 1000, label: '1,000'},
  {value: 10000, label: '10,000'},
  {value: 90000, label: '90,000'}
];

const QueryMax = (props) => (
    <div>
      Max:
      <Select
          value={props.maxVal}
          options={queryOptions}
          onChange={props.selectMax}
          className="select"
      />
    </div>
);


QueryMax.propTypes = {
  maxVal: PropTypes.number.isRequired,
  selectMax: PropTypes.func.isRequired
};

export default QueryMax;
