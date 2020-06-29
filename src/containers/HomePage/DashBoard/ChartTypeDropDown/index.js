import React from 'react';

import style from './styles/style.scss';

class ChartTypeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onTypeDropDownChange(event.target.value);
  }

  render() {
    return (
      <select id="chart-type-drop-down-button"
        className={style.forminline + ' form-control'}
        onChange={this.handleChange} >
        <option value="1">Recipients</option>
        <option value="2">Bank Account</option>
        <option value="3">Case</option>
        <option value="4">Category</option>
      </select>
    );
  }
}

export default ChartTypeDropDown;
