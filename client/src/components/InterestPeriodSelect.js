import React from 'react';
import PropTypes from "prop-types";

const InterestPeriodSelect = ({ onChange, value = 'monthly' }) => (
  <div>
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      <option value="monthly">Monthly</option>
      <option value="quarterly">Quarterly</option>
      <option value="annually">Annually</option>
    </select>
  </div>
);

InterestPeriodSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default InterestPeriodSelect;
