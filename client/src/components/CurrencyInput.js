import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CurrencyInput.css";

export default class CurrencyInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };
  }

  render() {
    const { defaultValue, onChange } = this.props;
    const { value } = this.state;

    return (
      <div
        className={`currency-input ${
          defaultValue !== undefined ? "default-value" : ""
        }`}
      >
        <span>£</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  defaultValue: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
