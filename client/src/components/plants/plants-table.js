import React, { PropTypes }  from 'react'
import { Table } from 'react-bootstrap';




const PlantsTable = (props) => (
  <div>
    <button onClick={props.textClick}>test link</button>
    <br/>
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr><th>symbol</th><th>synonym</th><th>family</th><th>common</th><th>sci-name</th></tr>
      </thead>
      <tbody>
        {props.plants.map((plant) =>
          <tr key={plant.id} >
            <td>{plant.symbol}</td>
            <td>{plant.synonym}</td>
            <td>{plant.family}</td>
            <td>{plant.common_name}</td>
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
