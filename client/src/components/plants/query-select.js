import React, { PropTypes }  from 'react'
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import './query-select.css';

const queryOptions = [
  {value: 'common', label: 'Common'},
  {value: 'symbol', label: 'Symbol'},
  {value: 'family', label: 'Family'}
];

const QuerySelect = (props) => (
  <div className="selectDiv">
    <Select
        placeholder="query by..."
        value={props.queryType}
        options={queryOptions}
        onChange={props.selectQuery}
        className="select"
    />
    <input
        type="text"
        value={props.queryVal}
        onChange={props.changeQueryVal}
    />
    <Button
        bsStyle="primary"
        bsSize="small"
        onClick={props.clickQuery}>
      Go
    </Button>
  </div>
);


QuerySelect.propTypes = {
  queryType: PropTypes.string.isRequired,
  queryVal: PropTypes.string.isRequired,
  selectQuery: PropTypes.func.isRequired,
  changeQueryVal: PropTypes.func.isRequired,
  clickQuery: PropTypes.func.isRequired
};

export default QuerySelect;
