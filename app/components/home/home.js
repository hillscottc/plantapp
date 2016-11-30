import React from 'react'
import PlantsView from  '../plants/plants-view'
import './home.css'

const Home = (props) => (
    <div className="homeDiv">
      <div className="page-header" id="header">
        <h1>Plants</h1>
        <p>driven by a Postgres database built from 90,000 records of data supplied by <a target="_blank" href="https://plants.usda.gov/dl_all.html">the USDA</a>
        </p>
      </div>
      <PlantsView />
      <br/>
    </div>
);

export default Home;