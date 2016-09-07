import React , { PropTypes }  from 'react'


const PlantsList = ({plants}) => (
  <div>
    <br/>
    {plants.map((plant) =>
      <div key={plant.id}>
        {plant.id}, {plant.symbol}
      </div>
    )}
  </div>
);


PlantsList.propTypes = {
  plants: PropTypes.array.isRequired
};

export default PlantsList;
