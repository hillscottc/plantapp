import React from 'react'
import './about.css';

const About = (props) => (
  <div className="aboutDiv">
    <div className="page-header">
      <h1>About</h1>
    </div>
    <ul>
      <li>A <a target="_blank" href="https://github.com/facebookincubator/create-react-app">create-react-app</a> is the web frontend.
      </li>
      <li>An <a target="_blank" href="https://expressjs.com/">Express</a> app is the backend, serving the client app and a data
        api. <a target="_blank" href="http://strongloop.github.io/node-foreman/">node-foreman</a> is used to run them together,
        as suggested in <a target="_blank" href="https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/">this post</a>.
      </li>
      <li>The database is <a target="_blank" href="https://www.mongodb.com/download-center#community">mongoDB</a>.
        The plant data is loaded from a <code>.csv</code> file from
        <a target="_blank" href="https://plants.usda.gov/dl_all.html">USDA Plants Database</a>.
      </li>
    </ul>

  </div>
);

export default About;