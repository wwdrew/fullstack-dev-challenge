import React from "react";
import PropTypes from "prop-types";
import "./SliderInput.css";

const SliderInput = ({ onChange, value = 4 }) => (
  <div className="fmz-slider">
    <p>{value}%</p>
    <input
      type="range"
      value={value}
      min={0}
      max={10}
      step={0.25}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
  </div>
);

SliderInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default SliderInput;
