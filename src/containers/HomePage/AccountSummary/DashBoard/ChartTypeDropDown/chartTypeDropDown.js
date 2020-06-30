import React from 'react';
import PropTypes from 'prop-types';

import classes from './chartTypeDropDown.module.scss';

const ChartTypeDropDown = (props) => {
  const handleChange = (e) => {
    props.dropDownChanged(e.target.value);
  }

  return (
    <select
      className={classes.forminline + ' form-control'}
      onChange={handleChange} >
      <option value="1">Recipients</option>
      <option value="2">Bank Account</option>
      <option value="3">Case</option>
      <option value="4">Category</option>
    </select>
  );
}

ChartTypeDropDown.propTypes = {
  dropDownChanged: PropTypes.func
}

export default ChartTypeDropDown;
