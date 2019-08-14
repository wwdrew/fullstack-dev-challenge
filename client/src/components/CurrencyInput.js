import React from "react";
import PropTypes from "prop-types";
import "./CurrencyInput.css";

const CurrencyInput = ({ onChange, value = 0 }) => (
  <div className="currency-input">
    <span>£</span>
    <input type="text" value={value} onChange={(e) => onChange(parseInt(e.target.value, 10))} />
  </div>
);

CurrencyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default CurrencyInput;
