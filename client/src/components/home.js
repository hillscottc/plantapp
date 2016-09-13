import React from 'react'
import PlantsView from  './plants/plants-view'

const headerStyle = {marginTop: '70px'};

const Home = (props) => (
    <div>
      <div className="page-header" style={headerStyle}>
        <h1>Plants
          <p><small>driven by data from the <a target="_blank" href="https://plants.usda.gov/dl_all.html">USDA Plants Database</a> of 90,000+ species</small></p>
        </h1>
      </div>
      <PlantsView />
    </div>
);

export default Home;