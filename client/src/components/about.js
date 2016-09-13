import React from 'react'

const headerStyle = {marginTop: '70px'};

const About = (props) => (
  <div>
    <div className="page-header" style={headerStyle}>
      <h1>About</h1>
    </div>

    <h2>Tech</h2>
    <h3>Backend</h3>
    <a href="https://expressjs.com/">Express</a>,&nbsp;
    <a href="https://www.mongodb.com/download-center#community">mongoDB</a>,&nbsp;
    <a href="http://mongoosejs.com/docs/">mongoosejs</a>


   <h3>Client</h3>
    <a href="https://facebook.github.io/react/">React</a>,&nbsp;
    <a href="https://github.com/ReactTraining/react-router">react-router</a>,&nbsp;
    <a href="http://react-bootstrap.github.io/">react-bootstrap</a>

  </div>
);

export default About;