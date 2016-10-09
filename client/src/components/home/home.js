import React from 'react'
import PlantsView from  '../plants/plants-view'
import './home.css'

const Home = (props) => (
    <div className="homeDiv">
      <div className="page-header" id="header">
        <h1>Plants</h1>
      </div>
      <PlantsView />
      <br/>
    </div>
);

export default Home;