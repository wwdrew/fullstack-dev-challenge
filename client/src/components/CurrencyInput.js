import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CurrencyInput.css";

export default class CurrencyInput extends Component {
  render() {
    const { onChange, value = 0 } = this.props;

    return (
      <div className="currency-input">
        <span>£</span>
        <input type="text" value={value} onChange={onChange} />
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};
