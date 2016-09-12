import React, { PropTypes }  from 'react'
import { Table } from 'react-bootstrap';
import './plants-table.css';
import { Button } from 'react-bootstrap';



const PlantsTable = (props) => (
  <div>
    <br/>
    <Button
        bsStyle="primary"
        bsSize="xsmall"
        onClick={props.handleQueryClick}>
      reset
    </Button>
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr><th>Symbol</th><th>Synonym</th><th>Family</th><th>Common</th><th>Sci-name</th></tr>
      </thead>
      <tbody>
        {props.plants.map((plant) =>
          <tr key={plant.id} >
            <td className="clickable"
                onClick={props.columnClick.bind(this, 'symbol')}>
              {plant.symbol}
            </td>
            <td>
              {plant.synonym}
              <Button bsStyle="link" onClick={props.columnClick.bind(this, 'symbol')}>
                Link to {plant.synonym}
              </Button>
            </td>
            <td className="clickable"
                onClick={props.columnClick.bind(this, 'family')}>
              {plant.family}
            </td>
            <td className="clickable"
                onClick={props.columnClick.bind(this, 'common')}>
              {plant.common_name}
            </td>
            <td>{plant.sci_name}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
);


PlantsTable.propTypes = {
  plants: PropTypes.array.isRequired,
  columnClick: PropTypes.func.isRequired
};

export default PlantsTable;
