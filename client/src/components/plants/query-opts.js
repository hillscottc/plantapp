import React, { PropTypes }  from 'react'
import Select from 'react-select';

const queryOptions = [
  {value: 100, label: '100'},
  {value: 1000, label: '1,000'},
  {value: 10000, label: '10,000'},
  {value: 90000, label: '90,000'}
];

const QueryOpts = (props) => (
    <div>
      <p>Options</p>
      Max:
      <Select
          value={props.maxVal}
          options={queryOptions}
          onChange={props.selectMax}
          className="select"
      />
      <div>Common:
        <input type="text" onChange={(e) => props.doQuery('common', e.target.value)} />
      </div>
      <div>Complex:
        <input type="text" onChange={(e) => props.doComplexQuery(
            {symbol:'FOO', common:'BAR', family:'BAZ'})} />
      </div>
    </div>
);


QueryOpts.propTypes = {
  maxVal: PropTypes.number.isRequired,
  selectMax: PropTypes.func.isRequired,
  doQuery: PropTypes.func.isRequired,
  doComplexQuery: PropTypes.func.isRequired
};

export default QueryOpts;
