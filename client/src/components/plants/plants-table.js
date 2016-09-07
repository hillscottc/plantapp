import React, { PropTypes }  from 'react'


const PlantsTable = ({plants}) => (
  <div>
    <br/>
    <table>
      <thead>
        <tr><th>symbol</th><th>synonym</th><th>family</th><th>common-name</th><th>sci-name</th></tr>
      </thead>
      <tbody>
        {plants.map((plant) =>
          <tr key={plant.id} >
            <td>{plant.symbol}</td>
            <td>{plant.synonym}</td>
            <td>{plant.family}</td>
            <td>{plant.common_name}</td>
            <td>{plant.sci_name}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);


PlantsTable.propTypes = {
  plants: PropTypes.array.isRequired
};

export default PlantsTable;
