import React, { PropTypes } from 'react'
import './button.css';

const Button = ({ value, onClick }) => (
    <div className={"Button"}>
      <button type="button"
              onClick={e => onClick(e.target.value)}
              value={value}>
        {value}
      </button>
    </div>
);


Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  value: "Click me.",
  onClick: (()  => {console.log("Click!")})
};


export default Button;