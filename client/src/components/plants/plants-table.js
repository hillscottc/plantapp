import React, { PropTypes }  from 'react'
import { Table } from 'react-bootstrap';

/*
This `props.textClick.bind(this, 'symbol')` prepends `symbol` to the arg list
of `textClick`. ref: http://derpturkey.com/react-pass-value-with-onclick/
 */


const PlantsTable = (props) => (
  <div>
    <br/>
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr><th>symbol</th><th>synonym</th><th>family</th><th>common</th><th>sci-name</th></tr>
      </thead>
      <tbody>
        {props.plants.map((plant) =>
          <tr key={plant.id} >
            <td onClick={props.textClick.bind(this, 'symbol')}>
              {plant.symbol}
            </td>
            <td onClick={props.textClick.bind(this, 'synonym')}>
              {plant.synonym}
            </td>
            <td onClick={props.textClick.bind(this, 'family')}>
              {plant.family}
            </td>
            <td onClick={props.textClick.bind(this, 'common')}>
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
  textClick: PropTypes.func.isRequired
};

export default PlantsTable;
