import React from 'react'
import PlantsView from  '../plants/plants-view'
import { Grid, Row, Col } from 'react-bootstrap'

import './home.css'

const Home = (props) => (
    <div className="homeDiv">
      <div className="page-header">
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}><span id="headline">Plants</span></Col>
            <Col xs={6} md={4}><p id="tagline">driven by a Postgres database built from 90,000 records
              of data supplied by <a target="_blank" href="https://plants.usda.gov/dl_all.html">the USDA</a></p>
            </Col>
          </Row>
        </Grid>
      </div>
      <PlantsView />
    </div>
);

export default Home;