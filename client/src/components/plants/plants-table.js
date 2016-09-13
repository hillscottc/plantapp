import React, { PropTypes }  from 'react'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const PlantsTable = (props) => (
  <div>
    <br/>
    <Button
        bsStyle="primary"
        bsSize="xsmall"
        onClick={props.resetQuery}>
      reset
    </Button>
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr><th>Symbol</th><th>Synonym</th><th>Family</th><th>Common</th><th>Pics</th><th>Sci-name</th></tr>
      </thead>
      <tbody>
        {props.plants.map((plant) =>
          <tr key={plant.id} >
            <td>
              <Button bsStyle="link" onClick={props.columnClick} value='symbol'>
                {plant.symbol}
              </Button>
            </td>
            <td>
              {plant.synonym}
            </td>
            <td>
              <Button bsStyle="link" onClick={props.columnClick} value='family'>
                {plant.family}
              </Button>
            </td>
            <td>
              <Button bsStyle="link" onClick={props.columnClick} value='common'>
                {plant.common_name}
              </Button>
            </td>
            <td>
              <a target="_blank" href={`http://images.google.com/images?q="${plant.sci_name}"`}>
                <span className={plant.sci_name ? "glyphicon glyphicon-camera": ""}> </span>
              </a>
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
