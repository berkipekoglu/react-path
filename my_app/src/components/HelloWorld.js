import React from "react";
import PropTypes from 'prop-types';
import "./HelloWorld.css";

const HelloWorld = ({name, age, job, children}) => {
  return <div>
    <h3>Selam ben {name}</h3>
    <div>
      <span>{age} yaşımdayım.</span>
    </div>
    <div>
      <span>Ben bir {job}'ım.</span>
    </div>
    <div style={{marginTop: 15, marginBottom: 15}}>
      {children}
    </div>
  </div>;
};

HelloWorld.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  job: PropTypes.string,
  children: PropTypes.node
}

HelloWorld.defaultProps = {
  name: "Berk",
  age: 24,
  job: "Front-End Developer"
}

export default HelloWorld;
