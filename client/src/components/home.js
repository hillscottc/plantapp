import React from 'react'
import PlantsView from  './plants/plants-view'

const headerStyle = {marginTop: '70px'};

const Home = (props) => (
    <div>
      <div className="page-header" style={headerStyle}>
        <h1>Plants
          <p><small>Driven by data from the <a href="https://plants.usda.gov/dl_all.html">USDA Plants Database</a></small></p>
        </h1>
      </div>
      <PlantsView />
    </div>
);

export default Home;