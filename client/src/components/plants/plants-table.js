import React, { PropTypes }  from 'react'
import { Table } from 'react-bootstrap';


const PlantsTable = (props) => (
  <div>
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr><th>Symbol</th><th>Synonym</th><th>Family</th><th>Common</th><th>Pics</th><th>Sci-name</th></tr>
      </thead>
      <tbody>
        {props.plants.map((plant) =>
          <tr key={plant.id} >
            <td>
              <a onClick={() => props.doQuery({symbol: plant.symbol})} >{plant.symbol}</a>
            </td>
            <td>
              {plant.synonym}
            </td>
            <td>
              <a onClick={() => props.doQuery({family: plant.family})} >{plant.family}</a>
            </td>
            <td>
              <a onClick={() => props.doQuery({common: plant.common_name})} >{plant.common_name}</a>
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
  doQuery: PropTypes.func.isRequired
};

export default PlantsTable;
