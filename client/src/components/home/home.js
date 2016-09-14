import React from 'react'
import PlantsView from  '../plants/plants-view'
import grassImg from '../../images/grass2.wide.png'
import './home.css'

const Home = (props) => (
    <div className="homeDiv">
      <img id="grassImg" src={grassImg} alt="grass"/>
      <div className="page-header" id="header">
        <h1>Plants
          {/*<p><small>driven by data from the <a target="_blank" href="https://plants.usda.gov/dl_all.html">USDA Plants Database</a> of 90,000+ species</small></p>*/}
        </h1>
      </div>
      <PlantsView />
    </div>
);

export default Home;